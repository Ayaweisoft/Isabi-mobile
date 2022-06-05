import { LogicService } from 'src/app/services/logic.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AccountService } from '../../shared/account.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { GameServiceService } from 'src/app/shared/game-service.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss'],
})


export class ForgetpasswordComponent implements OnInit {

  showPasswordEdit: boolean = false;
  showNumberForm: boolean  = true;
  showOTPInput: boolean = false;
  confirmOTP : boolean = false;
  otpFromServer: any;
  userOtpInput: any = 0;
  phoneFromServer : any;
  loading: boolean = false;
  allowReset : boolean = false;
  isResetToken: boolean = false;
  resetToken: any = '';
  // noAuthHeader = headers: new HttpHeaders({NoAuth: 'True'});


   header = new HttpHeaders().set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin','*');
 
  constructor(private accountService: AccountService,
              private http: HttpClient,
              private gameService: GameServiceService,
              private activatedRoute: ActivatedRoute,
              public alertController: AlertController,
              private logicService: LogicService,
              private router : Router,
              public toastController: ToastController,
              private userService: UserService) { 
  }

 

  model = {
    email:'',
  }

  tokenModel = {
    resetToken: ''
  }

  passModel = {
    password: '',
    conf_password: '',
    resetToken: ''
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => { 
      this.tokenModel.resetToken = params.get('token');
      if(this.tokenModel.resetToken){
        this.userService.validateResetToken(this.tokenModel).subscribe(
          res => {
            this.isResetToken = true;
            this.passModel.resetToken = this.tokenModel.resetToken;
            console.log('token: ', res)
          },
          err => {
            console.log(err);
          }
        )
      }    
  });
  }


  submitEmail(form: NgForm) {
    this.loading = true;
    this.userService.resetPassword(this.model).subscribe(
      res => {
        console.log("recovery email sent: ", res);
        this.logicService.presentSucess('success','check your email for futher instruction', 'continue'); 
      },
      err => {
        console.log(err.error);
      }  
    );
  }

  resetPassword(form: NgForm){
    if(this.passModel.password == this.passModel.conf_password){
      this.loading = true;
      this.userService.newPassword(this.passModel).subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err.error);
        }
      )
    } else{
      this.gameService.presentToast('Passwords do not match');
    }
  }
}