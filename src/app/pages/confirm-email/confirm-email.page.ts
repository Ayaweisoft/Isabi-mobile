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
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.page.html',
  styleUrls: ['./confirm-email.page.scss'],
})
export class ConfirmEmailPage implements OnInit {

  showPasswordEdit: boolean = false;
  paramText: any;
  showEmailForm: boolean = false;
  loading: boolean = false;
  isOtp: boolean = false;

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
    emailOtp:'',
  }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.model.emailOtp = params.get('id');
      console.log('otp: ', this.model.emailOtp);
      if(this.model.emailOtp){
        this.userService.validateOtp(this.model).subscribe(
          res => {
            this.isOtp = true;
            console.log('token: ', res)
          },
          err => {
            this.logicService.presentAlert('Email Verification', `Email Verification Failed: ${err.error.message}`);
            console.log('error: ', err.error.message);
          }
        )
      }     
    });
  }


  resendEmail() {
    this.loading = true;
    this.userService.validateOtp(this.model).subscribe(
      res => {
        console.log(res);
        this.logicService.presentAlert('success','Your Email has been verified'); 
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
