import { IonSlides, AlertController } from '@ionic/angular';
import { EventService } from '../../shared/event.service';
import { GameServiceService } from '../../shared/game-service.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { environment } from 'src/environments/environment';
import { LogicService } from '../../services/logic.service';
import { SocketService } from '../../socket.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
@ViewChild('mySlider', {static : false}) mySlider: IonSlides;
allEvent = [];
displayedEvents = [];
shadowEvents = [0,0,0];
loading = true;
webLink = environment.webVotingUrl;
slideCounter =  0;
socket: any;

opts = {
  slidePerView: 1,
  spaceBetween: 20
}

onlineUsers = 0;

  constructor(private router: Router,
              private eventService: EventService,
              public  userService: UserService,
              public gameService: GameServiceService,
              private accountService: AccountService,
              private logicService: LogicService,
              public SocketService: SocketService,
              public alertController: AlertController) {
  }

  ngOnInit() { 
    this.getAllevent();
    this.gameService.getGameTip();  
    this.gameService.getAdminDate();
    // this.appUser = localStorage.getItem('appUser');
    //this.initializeTimer(); 
    console.log("day", this.gameService.timeDays);
    // this.SocketService.fetchOnlineUsers(this.onlineUsers)
    // this.socket = io.io('localhost:8000');
    // this.socket.on('new-msg', (msg: any) => {
    //   console.log('sock msg: ' + msg);
    // })
    console.log('number of users online: ' + this.onlineUsers)
  }

  parseText(text){
    let length =  55;
    text = text.length > length ? text.substring(0, length - 3) + '...' : text.substring(0, text.length - 3) + '...';
    return text;
  }

  getAllevent(){
    this.eventService.getAllEvent().subscribe(
      res => {
        console.log(res);
        this.allEvent = res['event'];
        this.displayedEvents = this.allEvent;
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.userService.longToast(err.error.msg);
        console.log('error getting event', err);
      }
    );
  }
  // filterEvents(value, list = this.allEvent){
  //   let newEvents = list.filter(item => item.eventName.toUpperCase().includes(value.toUpperCase()) || item.aboutEvent.toUpperCase().includes(value.toUpperCase()));
  //   this.displayedEvents = newEvents
  //   console.log("ÿoooooo")
  // }
  getChildData(data){
    this.displayedEvents = data;
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.logicService.presentToast('Text copied!' );
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
