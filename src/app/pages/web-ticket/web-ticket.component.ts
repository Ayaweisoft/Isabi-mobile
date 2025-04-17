import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Ticket } from 'src/app/interfaces/ticket';
import { LogicService } from 'src/app/services/logic.service';
import { EventService } from 'src/app/shared/event.service';
import { BuyTicketComponent } from '../../components/buy-ticket/buy-ticket.component';

@Component({
  selector: 'app-web-ticket',
  templateUrl: './web-ticket.component.html',
  styleUrls: ['./web-ticket.component.scss'],
})
export class WebTicketComponent implements OnInit {
  loading: boolean;
  eventId: any;
  event: any;
  ticketList = [];

  constructor( private activateRoute: ActivatedRoute, private logicService: LogicService,
    private eventService: EventService, private modalController: ModalController) { }

  ngOnInit() {
    this.loading =  true;
    this.activateRoute.queryParams.subscribe(params => {
      this.eventId = this.activateRoute.snapshot.params['id'];
      if(this.eventId){
        this.eventService.getTicketByEventId(this.eventId).subscribe( (response: any) => {
          // console.log(response);
          this.loading = false;
         this.event = response['event']
         this.ticketList = response['ticketList']
        }, err => {
          this.loading = false;
          this.logicService.presentAlert('Error getting event', ' it could be cause by connection error, check your connection and try again')
          // console.log(err);
        })
      }
   });
  }


  async buyNow(ticket: Ticket) {
    ticket.eventId = this.eventId;
    const modal = await this.modalController.create({
    component: BuyTicketComponent,
    
    componentProps: { ticket }
    });
  
    await modal.present();
  
    const data = await modal.onDidDismiss();
    // console.log(data.data.data)
   if(data?.data?.data){
    this.ticketList.push(data.data.data)
  // this.findMyTicket();
   }
  
  }

}
