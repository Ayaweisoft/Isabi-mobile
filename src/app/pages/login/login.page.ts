import { GameServiceService } from '../../shared/game-service.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { AccountService } from '../../shared/account.service';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phoneRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  number: any;
  password: any;
  loading: boolean;

  constructor(public loadingController: LoadingController,
              private fb: FormBuilder,
              public alertController: AlertController,
              public toastController: ToastController,
              public gameService: GameServiceService,
              private router: Router,
              public userService: UserService,
              public accountService: AccountService) { 
    }

    model = {
      number: '',
      password: ''
    };

  ngOnInit() {
    this.loading = false;
  }

  async presentFailNetwork() {
    const toast = await this.toastController.create({
      message: 'No internet connection!!!',
      duration: 2000
    });
    toast.present();
  }

  async login(form: any) {
    console.log('login fire')
    this.loading = true;
    this.userService.login(this.model).subscribe(response => {
      this.userService.setToken(response['token']);
      // this.userService.setUsername(response.doc['username']);
      // this.userService.loadBalance();
      this.userService.loadProfilePicture();
      this.accountService.loadMyBonus();
      this.accountService.loadMyBalance();
      this.userService.loadUsername();

      this.loading = false;
      this.router.navigate(['/']);      
    }, err => {
      this.loading = false;
        this.gameService.presentToast(err.error.message);
        console.log('LOGIN ERROR', err.error.message);
   
     
      // this.loginToast(message);
    });
  }

  
  register() {
    this.router.navigate(['/register']);
  }


  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: 'Ooops!',
      message: ` <strong class="text-danger"> ${msg}</strong>`,
      buttons: [ {
          text: 'Try again',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();

  }



}
