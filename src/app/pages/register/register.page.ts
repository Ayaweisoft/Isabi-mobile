import { GameServiceService } from '../../shared/game-service.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LogicService } from '../../services/logic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading: boolean;
  id: any;
  isReferralCode: boolean = false;
  // referralCode: any;
  phoneRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  ref = {
    referralCode: '',
  }

  constructor(public userService: UserService,
    private logicService: LogicService,
    public gameService: GameServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      if(this.userService.networkDisconnet){
        // this.presentFailNetwork();
    }
  }

  model = {
    number: '',
    fullname: '',
    password: '',
    email:'',
    username: '',
    conf_password:'',
    referrer: '',
    nationality: '',
    birthday: ""
  };

  ngOnInit() {
 
    this.activatedRoute.paramMap.subscribe(params => { 
        this.id = params.get('id');
        if(this.id){
          this.ref.referralCode = this.id;
          this.isReferralCode = true;
          this.model.referrer = this.id;
          console.log(this.ref.referralCode);
        }
        
    });
  }


  
 async register(){
    this.loading = true; 
    this.userService.registerUser(this.model).subscribe( 
      response => {
        

        this.loading = false;
        let message = "Registration successful!";
        this.logicService.presentSucess('success','registration successful', 'continue'); 
        this.router.navigate(['/confirm-email']);
      },
      error => {
        this.loading = false;
        // console.log(error);
        let message = error.error;
        this.gameService.presentToast(message);
        console.log('error: ', error)
        
      }
    );
  }

}
