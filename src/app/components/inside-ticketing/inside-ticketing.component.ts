import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRefresher, ModalController } from '@ionic/angular';
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
  ticketList = [];
  myTicketList = [];
  segment= 'ticket';

  constructor(private route: ActivatedRoute, 
    private eventService: EventService,
    public userService: UserService,
    private logicService: LogicService,
    private modalController: ModalController) { }

  ngOnInit() {
  
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

  async buyNow(ticket) {
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
    this.eventService.findMyTicket(this.eventId).subscribe(myList => {
      console.log('OBSSS ', myList);
      this.myTicketList = myList['ticketList'];
    })
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

}
