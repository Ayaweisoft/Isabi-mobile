
import anime from 'animejs';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, LoadingController, AlertController, ToastController, Platform, MenuController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { GameServiceService } from 'src/app/shared/game-service.service';
import { UserService } from 'src/app/shared/user.service';
import { HttpClient } from '@angular/common/http';
import { AccountService } from 'src/app/shared/account.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-not-live',
  templateUrl: './not-live.component.html',
  styleUrls: ['./not-live.component.scss'],
})
export class NotLiveComponent implements OnInit {


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
  slideCounter =  0;

  

  constructor(public gameService: GameServiceService, public userService: UserService,
              private http: HttpClient, private loadingController: LoadingController,
              public alertController: AlertController, public toastController: ToastController,
              public accountService: AccountService,  private platform: Platform,
              public menu: MenuController, protected sanitizer: DomSanitizer,
              private router: Router) {
               

     }

   

     ionViewWillEnter() {
    this.gameService.getAdminDate();
    console.log('will enter')
     }



     ionViewDidEnter(){
      console.log('did enter');
     }


     ionViewCanEnter(){
      console.log('can enter');
     }


  ngOnInit() {
    this.loadBalance(); 
    this.appUser = localStorage.getItem('appUser');
    this.getYoutubeLink();
    // this.doMagic();
    this.gameService.getGameTip(); 
    this.autoSlide();
  }



  ngOnDestroy() {
    console.log('on desotry');
    clearInterval(this.gameTime);
    
  }


 


async autoSlide() {
   setInterval(()=> {
      this.gameService.slideCounter = this.gameService.gameTipArray.length;
      this.gameService.slideCounter --;
      this.mySlider.slideNext(3000, true);
      console.log('slide to prev', this.gameService.slideCounter);
   
   
   },9000)



}




  async presentNotice() {
    const alert = await this.alertController.create({
      header: 'Notice!',
      cssClass : 'success',
      message : `<h6> Game will be live this saturday 6AM to 6PM...!</h6>  <br>
               Click continue to study clue tips against saturday's game sessions.`,
   
      buttons: [ {
          text: 'continue',
          cssClass : 'success',
          handler: (val) => {
           console.log('close notice');
          }
        }
      ]
    });
  
    await alert.present();
  }



  

  doMagic() { anime({ targets: '#fiftyk', translateX: {
        value: 250,
        duration: 800
      },
      rotate: { value: 360, duration: 1800, easing: 'easeInOutSine'
      }, scale: { value: 2, duration: 1600, delay: 800,
        easing: 'easeInOutQuart' 
      },
      delay: 250 
    });
  }

  clickSlidetoNext() {
    console.log('slide to next')
    this.mySlider.slideNext();
  }

  clickSlidePrevious() {
    console.log('slide to previous');
    this.mySlider.slidePrev();
  }


  async getYoutubeLink() {
   this.gameService.getYoutubeLink().subscribe(
      res => {
        let youtubeVideo = res['doc']['link'];
        console.log('link', youtubeVideo);
        this.safeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(youtubeVideo);
      },
      err => {
        this.userService.generalToast('youtube url not found!', 2000);
      }
    );
  }



  loadBalance() {
    this.accountService.loadMyBalance();
  } 



  

}
