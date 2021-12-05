import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EventService } from 'src/app/shared/event.service';
import { GameServiceService } from 'src/app/shared/game-service.service';
import { UserService } from 'src/app/shared/user.service';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss'],
})
export class ManageEventComponent implements OnInit {
  allEvent = [];
  loading = true;
    constructor(private router: Router, private gameService: GameServiceService, 
                private eventService: EventService, public  userService: UserService,
                private modalController: ModalController,
                public alertController: AlertController) { }
  
    ngOnInit() { 
      this.getAllevent();
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
    console.log(data?.data)
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
  
  
    getAllevent(){
        this.eventService.getAllEventAdmin().subscribe(
          res => {
            console.log(res);
            this.allEvent = res['event'];
            this.loading = false;
          },
          err => {
            this.loading = false;
            this.userService.longToast(err.error.msg)
            
  
            console.log('error getting event', err);
          }
        );
    }
  
    // insideEvent(event){
  
    //   switch (event.type) {
    //     case 'VOTING':
    //       this.router.navigate([`/tabs/inside-event`, event._id]);
    //       break;
    //     case 'TICKETING':
    //       this.router.navigate([`/tabs/inside-ticketing`, event._id]);
    //       break;
    //     case 'FORM-SALES':
    //       this.router.navigate([`/tabs/form-sales`, event._id]);
    //       break;
      
    //     default:
    //       break;
    //   }
      
    
    // }
  
  
  async handleDelete(event) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Delete <strong>${event.aboutEvent} </strong>!!!`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.loading = true;
            this.eventService.deleteEvent(event._id).subscribe(
              res => {
                this.loading = false;
                this.userService.generalToast(res['msg'], 2000);
                this.getAllevent();
              },
              err => {
                this.loading = false;
                this.userService.generalAlert(err.error.msg);
              }
            );
          }
        }
      ]
    });
  
    await alert.present();
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
  
  }
  

