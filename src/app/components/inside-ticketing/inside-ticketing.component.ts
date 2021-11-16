import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonRefresher, ModalController } from '@ionic/angular';
import { Ticket } from 'src/app/interfaces/ticket';
import { LogicService } from 'src/app/services/logic.service';
import { EventService } from 'src/app/shared/event.service';
import { UserService } from 'src/app/shared/user.service';
import { BuyTicketComponent } from '../buy-ticket/buy-ticket.component';
import { InsideTicketAddTicketComponent } from '../inside-ticket-add-ticket/inside-ticket-add-ticket.component';

@Component({
  selector: 'app-inside-ticketing',
  templateUrl: './inside-ticketing.component.html',
  styleUrls: ['./inside-ticketing.component.scss'],
})
export class InsideTicketingComponent implements OnInit {
  @ViewChild('refresherRef', {static : false}) refresherRef: IonRefresher;
  eventId: any;
  eventRefresher: any;
  loading: boolean;
  ticketList : Ticket[] =  [];
  myTicketList : Ticket[] = [];
  segment= 'ticket';
  generatedTicketId: string;

  constructor(private route: ActivatedRoute, 
    private eventService: EventService,
    public userService: UserService,
    private alertController: AlertController,
    private logicService: LogicService,
    private modalController: ModalController) { }

  ngOnInit() {
  this.randomString(6);
  }

  randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var shortpass =  [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],'');
console.log('POP ', shortpass)
this.generatedTicketId = shortpass
     this.eventService.checkTicketIdIfExist(shortpass, this.eventId).subscribe(res => {
       console.log(res);
       this.randomString(6)
     }, err => {
       console.log(err);
     });
     return
}

  ionViewDidEnter() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      console.log('seee id ', this.eventId)
     
    });
    this.getAllTicket();
    this.findMyTicket();
  }


  segmentChanged(ev){
    console.log(ev)
    this.segment = ev.detail.value;
  }

  async buyNow(ticket: Ticket) {
    ticket.eventId = this.eventId;
    const modal = await this.modalController.create({
    component: BuyTicketComponent,
    
    componentProps: { ticket }
    });
  
    await modal.present();
  
    const data = await modal.onDidDismiss();
    console.log(data.data.data)
   if(data.data.data){
    this.myTicketList.push(data.data.data)
  this.findMyTicket();
   }
  
  }

  async deleteTicket(id){
   var result =  await this.logicService.alertDialog('delete ticket','If confirm, record cannot be recovered.');
   if(result){
     this.ticketList = this.ticketList.filter((item)=> item._id != id);
     this.eventService.deleteTicket(id).subscribe(res=> {
       console.log(res)
     })
   }
  }


  doRefresh(ev){
    this.getAllTicket();
  }
  

  getAllTicket(){
    this.eventService.getTicketByEventId(this.eventId).subscribe(
      res => {
        try {
          this.refresherRef.complete();
        } catch (error) {
          
        }
        this.loading = false;
       console.log(res);
       this.ticketList = res['ticketList'];
      },
      err => {
        try {
          this.refresherRef.complete();
        } catch (error) {
          
        }
        this.loading = false;
        this.logicService.presentToast(err.error.msg);
      }
    );
  }

  findMyTicket(){
    this.eventService.findMyTicket(this.eventId, this.userService.getEmail()).subscribe(myList => {
      console.log('OBSSS ', myList);
      this.myTicketList = myList['ticketList'];
    })
  }


  async presentShareTicket(ticket: Ticket) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Share ticket!',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Beneficiary Email'
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Beneficiary Name'
        },
        {
          name: 'phone',
          type: 'tel',
          placeholder: 'Beneficiary phone'
        },
        {
          name: 'slot',
          type: 'number',
          value:1,
          placeholder: 'slot'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (data) => {
            console.log('Confirm Ok', data);
            if(!data?.email || !data.phone || !data?.name || !data?.slot){
              return this.logicService.presentToast('one or more field is required!')
            }

            if(data.slot === 0){
              return this.logicService.presentToast('slot must be greater tha zero')
            }
            var  remainingTicket = ticket?.numberOfTicket - parseInt(data.slot);
            console.log('remain ', remainingTicket)
          if( remainingTicket < 1 ){
            return this.logicService.presentToast('You have requested more than your slot')
          }

          this.loading = true;
         var newTicket = { name: data.name, amount: ticket.amount, ticketDBId: ticket._id,
          ticketId: this.generatedTicketId, email: data.email, numberOfTicket: data.slot,
           phone: data.phone, imageUrl: ticket.imageUrl}
      
          this.eventService.shareTicket(newTicket).subscribe(response => {
            console.log(response);
            this.findMyTicket();
            this.randomString(6);
            this.logicService.presentSucess('Shared successful', `you have successfully shared ${newTicket?.numberOfTicket} `+
            `ticket(s)  to ${newTicket?.email}`,'close');
            this.loading = false;
          }, err => {
            this.loading = false;
            console.log(err);
          })

          }
        }
      ]
    });

    await alert.present();
  }







async addTicket() {
  const modal = await this.modalController.create({
  component: InsideTicketAddTicketComponent,
  componentProps: { eventId: this.eventId,  }
  });

  await modal.present();

  const data = await modal.onDidDismiss();
  console.log(data)
  if(data?.data?.data){
  this.ticketList.push(data?.data?.data);

  }

}

confirmMessage(ticket){
  console.log('confirm  ticket ', ticket)
  ticket.status = 'VALID';
  this.eventService.confirmTicketId(ticket._id).subscribe(data => {
    
  }, err => {
    ticket.status = 'UNALLOTED';
    this.logicService.presentToast('error updating ticket status');
  });
}

}
