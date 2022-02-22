import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import anime from 'animejs';
import { AlertController, ToastController, MenuController, IonSlides, Platform, LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { Observable, Subscription  } from 'rxjs';
// import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GameServiceService } from 'src/app/shared/game-service.service';
import { UserService } from 'src/app/shared/user.service';
import { AccountService } from 'src/app/shared/account.service';


@Component({
  selector: 'app-gamesection',
  templateUrl: './gamesection.component.html',
  styleUrls: ['./gamesection.component.scss'],
})
export class GamesectionComponent implements OnInit {


  @ViewChild('mySlider', {static : false}) mySlider: IonSlides;
  @ViewChild('box', {static : false}) box: ElementRef;
  @ViewChild('items', {static : false}) items: ElementRef;
  @ViewChild('video_link', {static : false}) video_link: ElementRef;
  documents: Observable<string[]>;
  private _docSub: Subscription;

  appUser: any;
  low_balance :boolean = false;
  safeVideo: any;
  loading = false;
  gameTime : any;
  versionCode = 4.1;
  serverVersion: any;
  public applicationDate: any;
  gameNotLive: boolean = true;
  public gameLive: boolean = false;
  public timeDays: any;
  public timeHours: any;
  public timeMinute: any;
  public timeSeconds: any; 
  checkingInterval: any;

  

  constructor(public gameService: GameServiceService,
              public userService: UserService,
              private http: HttpClient,
              private loadingController: LoadingController,
              public alertController: AlertController,
              public toastController: ToastController,
              public accountService: AccountService,
              private platform: Platform,
              public menu: MenuController,
              protected sanitizer: DomSanitizer,
              private router: Router) {
                
          

     }

 async ngOnInit() {
    this.appUser = localStorage.getItem('appUser');
   await this.gameService.getAdminDate();
   await this.loadBalance(); 
                this.autoSlide();
 
  }


  ionViewWillEnter() {
  }

  ionViewWillLeave(){
  //  this.checkingInterval
  }

 





async autoSlide() {
  setInterval(()=> {
     this.gameService.slideCounter = this.gameService.gameTipArray.length;
     this.gameService.slideCounter --;
     this.mySlider.slideNext(3000, true);
  
  
  },9000)
}






  


  clickSlidetoNext() {
    console.log('slide to next')
    this.mySlider.slideNext();
  }

  clickSlidePrevious() {
    console.log('slide to previous');
    this.mySlider.slidePrev();
  }





  loadBalance() {
    this.accountService.loadMyBalance();
  } 



  

}
