import { AccountComponent } from './pages/account/account.component';
import { SocketService } from './services/socket.service';
import { AccountService } from './shared/account.service';
import { UserService } from './shared/user.service';
import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { NavController, Platform, AlertController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SplashComponent } from './components/splash/splash.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild('bal', {static : false}) bal: ElementRef;
  showSplash = true;
  @ViewChild('nav', {static: false}) nav: NavController;
  balance : any;
  image: any;
  username: String;
  bonus: any;
  userCount: number;
  authenticate = false;
  loading: boolean = true;
  public appPages = [
    {
      title: 'PLAY DEMO',
      url: '/tabs/playdemo',
      icon: 'game-controller'
    },
    {
      title: 'LEADERBOARD',
      url: '/tabs/leaderboard',
      icon: 'trophy'
    },
    {
      title: 'PLAY GAME',
      url: '/tabs/gamesection',
      icon: 'game-controller'
    },
   
    {
      title: 'EVENTS',
      url: '/tabs/events',
      icon: 'star-outline'
    },
     
    {
      title: 'ACCOUNT',
      url: '/tabs/account',
      icon: 'wallet'
    },
    
    
    {
      title: 'MY RECORD',
      url: '/tabs/myrecord',
      icon: 'list'
    },
    {
      title: 'TRANSACTION',
      url: '/tabs/transaction',
      icon: 'card'
    },
    // {
    //   title: 'HOW TO PLAY',
    //   url: '/howtoplay',
    //   icon: 'information-circle'
    // },
  ];
  dark = false;

  public labels = [
    {title:'UPLOAD QUESTIONS', url:'/tabs/admin-upload', icon:'add'},
    {title:'MANAGE EVENTS', url:'/tabs/manage-event', icon:'star-outline'},
    {title:'CASHOUT REQUESTS', url:'/tabs/cashout-request', icon:'cash'},
    {title:'MANAGE USERS', url:'/tabs/manage-users', icon:'person'},
    {title:'MANAGE QUESTIONS', url:'/tabs/manage-questions', icon: 'help'},
    {title:'PAYOUT RECORD', url:'/tabs/payouts', icon:'cash'},
    {title:'ADMIN ACCOUNT', url:'/tabs/admin-account', icon:'wallet'},
    {title:'ADMIN SEARCH', url:'/tabs/adminquery', icon:'search'},
    {title:'ADMIN LEADERBOARD', url:'/tabs/admin-leaderbord', icon:'trophy'},
    {title:'ADMIN PLAY', url:'/tabs/admin-play', icon:'play'},
    // {title:'Admin dashboard', url:'/admin-dash'},

  ];
  

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private splashScreen: SplashScreen,
    private ModalController: ModalController,
    public UserService: UserService,
    public AccountService: AccountService,
    public SocketService: SocketService
  ) {
    // this.presentSplash();
    this.initializeApp();
  }


  // rateYourApp(){
  //   this.appRate.preferences.storeAppURL = {
  //     // ios: '<app_id>',
  //     // android: 'market://details?id=<ayawiesoft.swagasoft>',
  //     windows: 'ms-windows-store://review/?ProductId=<store_id>'
  //   }
  // }



  reloadBalance(){
    this.AccountService.loadMyBalance();
    // this.bal.nativeElement.classList.add('rubberBand');
    setTimeout(()=>{
      // this.bal.nativeElement.classList.remove('rubberBand');
    },2000);

  }

  reloadBonus(){
    this.AccountService.loadMyBonus();
    // this.bal.nativeElement.classList.add('rubberBand');
    setTimeout(()=>{
      // this.bal.nativeElement.classList.remove('rubberBand');
    },2000);

  }


  ngOnInit(){
    // this.getProfilePic();
    this.UserService.getUsername().subscribe(name => this.username = name);
    
  }
  ionViewWillEnter(){
    // this.getProfilePic();
    this.UserService.getUsername().subscribe(name => this.username = name);
    
  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.reloadBalance();
      this.AccountService.getAccountBalance().subscribe(bal =>  this.balance =  bal);
      this.reloadBonus();
      this.AccountService.getAccountBonus().subscribe(bon =>  this.bonus =  bon);
      console.log(this.bonus);
      
      const userID = this.UserService.getAuthId()
    console.log("E init")
    this.SocketService.userConnected(userID);
    this.SocketService.test(userID);
    this.SocketService.getConnectedUsers().subscribe(users => {
      this.userCount = users;
      console.log(this.userCount, "userCount");
    });
    this.SocketService.getUserDisconnected().subscribe(user => {
      this.userCount = user.length;
      console.log(this.userCount, "userCount");
    });
        // this.localNotifications.on('trigger').subscribe( res => {
        //   console.log('alert Trigger 2', res );
        //   let msg = res.data ? res.data.mydata : '';
        //   this.showAlert(res.title, res.text);
        // });
      this.UserService.loadProfilePicture();
      this.UserService.getProfilePicture().subscribe(pic => this.image = pic);
      // this.getProfilePic();
      this.UserService.loadUsername();
      this.UserService.getUsername().subscribe(name => this.username = name);
      
      
      this.statusBar.show();
      // this.splashScreen.hide();
      // timer(5000).subscribe(()=> this.showSplash = false);
    });

  }

  // async presentSplash() {
  //   const modal = await this.ModalController.create({
  //     component: SplashComponent,
  //     cssClass: 'modal-fullscreen'
  //   });
  //   return await modal.present();
  // }


  async showAlert(title, msg){
    const alert = await this.alertCtrl.create({
      header : title,
      message : msg
    });
    await alert.present();
  }

  // getProfilePic() {
  //   this.UserService.getProfilePic().subscribe(
  //     res => {
  //       this.loading = false;
  //       this.image = res.image_url;
  //       console.log(this.image);
  //     },
  //     err => {
  //       this.loading = false;
  //     }
  //   )
  // }

}
