import { GameServiceService } from '../../shared/game-service.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LogicService } from '../../services/logic.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading: boolean;
  phoneRegex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  constructor(public userService: UserService,
             private logicService: LogicService,
              public gameService: GameServiceService,
              private router: Router) {
                if(this.userService.networkDisconnet){
                  // this.presentFailNetwork();
              }
            }

            model = {
              number: '',
              password: '',
              email:'',
              username: '',
              conf_password:''
            };

  ngOnInit() {
  }


  
 async register(){
    this.loading = true; 
    console.log(this.model);
    this.userService.registerUser(this.model).subscribe( 
      response => {
        this.loading = false;
        let message = "Registraion successful!";
        this.logicService.presentSucess('success','registration successful', 'continue');       
        
      },
      error => {
        this.loading = false;
        console.log(error);
        let message = error.error;
        this.gameService.presentToast(message);
        
      }
    );
  }

}
