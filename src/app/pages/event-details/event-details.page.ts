import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EventService } from 'src/app/shared/event.service';
import { GameServiceService } from 'src/app/shared/game-service.service';
import { UserService } from 'src/app/shared/user.service';
import { EditEventComponent } from '../../components/edit-event/edit-event.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-event',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})

export class EventDetailsPage implements OnInit {
  allEvent = [];
  event: any;
  loading = true;
  id: any;
  isApproved = false;
  details: {
    sharingRatio_company: string
    sharingRatio_isabi: string
  };
  
    constructor(private router: Router, private gameService: GameServiceService, 
                private eventService: EventService, public  userService: UserService,
                private modalController: ModalController,
                private activatedRoute: ActivatedRoute,
                public alertController: AlertController) { 
                  this.details = {
                    sharingRatio_company: '70',
                    sharingRatio_isabi: '30',
                  };
                }
  
    ngOnInit() { 
      this.activatedRoute.paramMap.subscribe(params => { 
        this.id = params.get('id');
        console.log('my id: ', this.id);       
      });
      this.getEventById(this.id);
    }


async editEvent(event) {
  const modal = await this.modalController.create({
  component: EditEventComponent,
  componentProps: { event }
  });

  await modal.present();

  const data = await modal.onDidDismiss();
  console.log(data)
  if(data.role === 'exist'){
    event = data.data;
    this.allEvent =  this.allEvent.map((eve)=> {
      if(eve._id === data.data._id){
        eve = data.data;
        return eve;
      }else{
        return eve;
      }
    });
  }

}
  
  
  async  getEventById(id: any){
    this.loading = true;
    console.log('id: ', id);
    this.eventService.getEventById(id).subscribe(
      res => {
        console.log("log: ", res['eventData']);
        this.event = res['eventData'];
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.userService.longToast(err.error.msg)
        

        console.log('error getting event', err);
      }
    );
  }

    loadPendingEvent(){
      console.log("pending event")
      this.isApproved = false;
    }

    loadApprovedEvent(){
      console.log("approved event");
      this.isApproved = true;
    }

    parseText(text: any, length: number) {
      text =
        text.length > length
          ? text.substring(0, length - 3) + "..."
          : text.substring(0, text.length - 3) + "...";
      return text;
    }

  
  changeStatus(event, id){
   var selectedEvent =   this.allEvent.filter((item) => item._id === id);
   selectedEvent[0]['active'] = event.detail.checked;
   console.log('sel ', ...selectedEvent);
   const data = {id:selectedEvent[0]['_id'], status:selectedEvent[0]['active']}
   this.eventService.updateEventStatus(data).subscribe(res => {
    console.log(res)
   });
  }

  approveEvent(event: Event) {
    event.preventDefault();
    this.loading = true;
    console.log(this.details)
    this.eventService.approveEvent(this.id, this.details).subscribe(response => {
      this.loading = false;
      // console.log('event approved', response);   
      this.userService.generalAlert(response['msg'])
      this.router.navigate(['/tabs/manage-event']);  
    }, err => {
      this.loading = false;
      this.userService.generalAlert(err.error.message)
        // console.log('failed to approve event', err.error.message);
    });
  }

  rejectEvent(event: Event) {
    event.preventDefault();
    this.loading = true;
    this.eventService.rejectEvent(this.id).subscribe(response => {
      this.loading = false;
      // console.log('event rejected', response); 
      this.userService.generalAlert(response['msg'])
      this.router.navigate(['/tabs/manage-event']);  
    }, err => {
      this.loading = false;
      this.userService.generalAlert(err.error.msg)
      this.userService.generalAlert(err.error.message)
        // console.log('failed to rejected event', err.error.message);
    });
  }
  
  }
  

