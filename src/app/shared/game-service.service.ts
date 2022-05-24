import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
declare var NetworkInterface: any;

@Injectable({
  providedIn: 'root'
})
export class GameServiceService  {
 
  public gameTipArray = [];
  slideCounter = 0;
  public youtubeLink: any;
  loading : boolean;

  gameTime : any;
  
  serverVersion: any;
  public applicationDate: any;
  public timeDays: any;
  public timeHours: any;
  public timeMinute: any;
  public timeSeconds: any; 
  
  noAuthHeader = {headers: new HttpHeaders({NoAuth: 'True'})};
  AuthHeader = {headers: new HttpHeaders().set('Authorization',
  `Bearer ${localStorage.getItem('token')}`)};
  
  constructor(private http: HttpClient,public alertController: AlertController,
              public toastController: ToastController, private router: Router) {
            this.getGameTip();
            localStorage.setItem( 'GAMELIVE', 'true');
   }

  //  jan 10,2019 06:00:00
   // timer
  // App Date
  async getAdminDate() {
    clearInterval(this.gameTime);
    this.loading = true;
    this.http.get(environment.apiBaseUrl + '/get-admin-date').subscribe(res => {
     this.loading = false;
     this.applicationDate = res['doc']['appdate'];
     this.serverVersion = res['version'];
    //  console.log(this.serverVersion);
     this.gameTimer();

    //  setTimeout(()=> {
    //    if(this.serverVersion > environment.versionCode){
    //       this.presentUpdate();
    //    }
    //  },3000);
   });
  }
 
  async gameTimer() {
    let fake_date = 'aug 29,2020 12:10:00';
    let appDATE = this.applicationDate;
    let deadline = new Date(appDATE).getTime();
   
    this.gameTime = setInterval(() => {
   let now = new Date().getTime();
   let t = deadline - now;
  
   let d = Math.floor(t / (1000 * 60 * 60 * 24));
   let h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
   let s = Math.floor((t % (1000 * 60)) / 1000);
    
   this.timeDays = d < 10 ? '0' + d.toString() : d;
   this.timeHours = h < 10 ? '0' + h.toString() : h;
   this.timeMinute = m < 10 ? '0' + m.toString() : m;
   this.timeSeconds = s < 10 ? '0' + s.toString() : s;

   if (t < 0) {
    // console.log('GAME IS LIVE....');
    localStorage.setItem( 'GAMELIVE', 'true');
    clearInterval(this.gameTime);
    this.timeDays = '00';
    this.timeHours = '00';
    this.timeMinute = '00';
    this.timeSeconds = '00';
  
         } else {
          //  console.log('GAME NOT LIVE....');
           localStorage.setItem( 'GAMELIVE', 'false');
         }
  //  console.log('fake pass');
  
   }, 1000);
     }
  
  getGameLiveStatus(){
    return localStorage.getItem('GAMELIVE');
  }

  getGameTip(){
    this.http.get(environment.apiBaseUrl + '/game-fun-fact-tips').pipe(retry(3)).subscribe((tips) => {
      this.gameTipArray = tips['gamestips'];
    });
  }

  sendSms(sms){
   return this.http.post(environment.apiBaseUrl + '/send-sms', sms);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      header: 'Info ',
      message: `${message}`,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }


  setAdminDate(date) {
    return this.http.get(environment.apiBaseUrl + `/submit-admin-date${date}`);
  }

  setYoutubeDate(link) {
    return this.http.post(environment.apiBaseUrl + `/submit-youtube-link`, link);
  }



  getYoutubeLink(){
    return this.http.get(environment.apiBaseUrl + '/get-youtube-link');
  }

    createNewContestant(contestant){
      return this.http.post(environment.apiBaseUrl + '/create-new-contestant', contestant);
    }

    setGameAmount(data) : Observable<any>{
      return this.http.post(environment.apiBaseUrl + '/save-game-amount', data);
    }


    getGameAmount() : Observable<any>{
      return this.http.get(environment.apiBaseUrl + '/get-game-amount');
    }


    savePromo(data) : Observable<any>{
      return this.http.post(environment.apiBaseUrl + '/save-promo', data);
    }

    getPromo() : Observable<any>{
      return this.http.get(environment.apiBaseUrl + '/get-promo');
    }
  

    async presentUpdate() {
      const alert = await this.alertController.create({
        header: ' Update!',
        cssClass : 'success',
        message : `<h6>a new update is available.</h6>  <br>`,
     
        buttons: [ {
            text: 'update now',
            cssClass : 'success',
            handler: (val) => {
            window.location.href ='https://play.google.com/store/apps/details?id=ayawiesoft.swagasoft';
            }
          }
        ]
      });
    
      await alert.present();
    }


}




