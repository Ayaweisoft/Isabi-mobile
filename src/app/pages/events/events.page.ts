import { IonSlides, AlertController } from '@ionic/angular';
import { EventService } from '../../shared/event.service';
import { GameServiceService } from '../../shared/game-service.service';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { environment } from 'src/environments/environment';
import { LogicService } from '../../services/logic.service';

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

opts = {
  slidePerView: 1,
  spaceBetween: 20
}

  constructor(private router: Router,
              private eventService: EventService,
              public  userService: UserService,
              public gameService: GameServiceService,
              private accountService: AccountService,
              private logicService: LogicService,
              public alertController: AlertController) {
               }

  ngOnInit() { 
    this.getAllevent();
    this.gameService.getGameTip();
    this.gameService.getAdminDate();
    //this.initializeTimer();
    console.log("day", this.gameService.timeDays);
    this.autoSlide();

  }

async initializeTimer(){
  let day = document.querySelector(".day-loader");
  let hour = document.querySelector(".hour-loader");
  let minute = document.querySelector(".minute-loader");
  let second = document.querySelector(".second-loader");

  let dayValue = 0;
  let hourValue = 0;
  let minuteValue = 0;
  let secondValue = 0;

  let dayEndValue = 60 * 60 * 24;
  let hourEndValue = 60 * 60;
  let minuteEndValue = 60;
  let secondEndValue = 60;
  // let progressEndValue = 60 * 60;
  let speed = 1000;

  

  let dayprogress = setInterval(() => {
      dayValue++;
     
      (day as HTMLElement).style.background = `conic-gradient(
          #4d5bf9 ${dayValue * 0.1}deg,
          #cadcff ${dayValue * 0.1}deg
      )`
      if(dayValue == dayEndValue){
          dayValue = 0;
      }
  }, speed)

  let hourprogress = setInterval(() => {
    hourValue++;
   
    (hour as HTMLElement).style.background = `conic-gradient(
        #4d5bf9 ${hourValue * 0.1}deg,
        #cadcff ${hourValue * 0.1}deg
    )`
    if(hourValue == hourEndValue){
        hourValue = 0;
    }
}, speed)

let minuteprogress = setInterval(() => {
      minuteValue++;
     
      (day as HTMLElement).style.background = `conic-gradient(
          #4d5bf9 ${minuteValue * 6}deg,
          #cadcff ${minuteValue * 6}deg
      )`
      if(minuteValue == minuteEndValue){
          minuteValue = 0;
      }
  }, speed)

  let secondprogress = setInterval(() => {
      secondValue++;
     
      (day as HTMLElement).style.background = `conic-gradient
          #cadcff ${secondValue * 6}deg,
          #4d5bf9 ${secondValue * 6}deg,
      )`
      if(secondValue == secondEndValue){
          secondValue = 0;
      }
  }, speed)
}

  async autoSlide() {
    setInterval(()=> {
       this.gameService.slideCounter = this.gameService.gameTipArray.length;
       this.gameService.slideCounter --;
       this.mySlider.slideNext(3000, true);
       //console.log('slide to prev', this.gameService.slideCounter);
    
    
    },9000)

 }

 parseText(text){
  let length =  55;
  text = text.length > length ? text.substring(0, length - 3) + '...' : text.substring(0, text.length - 3) + '...';
  return text;
}
  
 clickSlidetoNext() {
  console.log('slide to next')
  this.mySlider.slideNext();
}

clickSlidePrevious() {
  console.log('slide to previous');
  this.mySlider.slidePrev();
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
          this.userService.longToast(err.error.msg)
          

          console.log('error getting event', err);
        }
      );
  }
  filterEvents(value, list = this.allEvent){
    let newEvents = list.filter(item => item.eventName.toUpperCase().includes(value.toUpperCase()) || item.aboutEvent.toUpperCase().includes(value.toUpperCase()));
    this.displayedEvents = newEvents
    console.log("ÿoooooo")
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
