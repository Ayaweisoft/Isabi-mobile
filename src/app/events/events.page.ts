import { AlertController } from '@ionic/angular';
import { EventService } from './../shared/event.service';
import { GameServiceService } from './../shared/game-service.service';
import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
allEvent = [];
loading = true;
  constructor(private router: Router, private gameService: GameServiceService, 
              private eventService: EventService, public  userService: UserService,
              private accountService: AccountService,
              public alertController: AlertController) {
               }

  ngOnInit() { 
    this.getAllevent();
  }


  getAllevent(){
      this.eventService.getAllEvent().subscribe(
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

  insideEvent(event){

    switch (event.type) {
      case 'VOTING':
        this.router.navigate([`/tabs/inside-event`, event._id]);
        break;
      case 'TICKETING':
        this.router.navigate([`/tabs/inside-ticketing`, event._id]);
        break;
      case 'FORM-SALES':
        this.router.navigate([`/tabs/form-sales`, event._id]);
        break;
    
      default:
        break;
    }
    
  
  }


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


 


}
