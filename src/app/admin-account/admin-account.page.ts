import { Router } from '@angular/router';
import { GameServiceService } from './../shared/game-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { AdminnavigationComponent } from '../adminnavigation/adminnavigation.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BehavourService } from '../services/behavour.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.page.html',
  styleUrls: ['./admin-account.page.scss'],
})
export class AdminAccountPage implements OnInit {


 segment = 'app_date';


  loading  = false;
  currentAmount: any;

  constructor(public gameService: GameServiceService,
                private router: Router,
                private behaviorService: BehavourService,
              private popoverController: PopoverController) { 

  }
  amountModel = {
    amount: null,
    admin : 'ADMIN'
  }

 model= { 
   activate: '',
   date:'',
   sms:'',
   youtubeUrl:''
 };

  ngOnInit() {
    this.behaviorService.getGameAmount().subscribe(amount => {
      this.currentAmount = amount;
    })
  }


  segmentChanged($event){
    console.log('event...', $event);
    this.segment = $event.detail.value;
  }


  

  selectedDate(event){
    console.log(event);
  }

  submitDate(form : NgForm){
    console.log(this.model.date);
  }

  submitSms(form : NgForm){
    console.log(this.model.sms);
    const sms = {sms : this.model.sms};
    this.gameService.sendSms(sms).subscribe(
      res =>{

       console.log(res);
       let message = res['message'];
       this.gameService.presentToast(message);
      }
      
    );
  }

  activateDate(){
    let adminDate = this.model.date;
    this.loading = true;
    
    this.gameService.setAdminDate(adminDate).subscribe(
      res => {
        this.loading = false;
        this.gameService.getAdminDate();
        this.router.navigateByUrl('/tabs/gamesection');
        
      },
      err => {
        this.loading = false;
      }
    );

  }

  submityoutubeLink(link){
    this.loading = true;
    let body = {"link" : this.model.youtubeUrl};
    console.log(body);
    this.gameService.setYoutubeDate(body).subscribe(
        res => {
          this.loading = false;
          console.log(res);
        },
        err => {
          this.loading = false;
          console.log(err);
        }
      );
  }

  async presentNavigation() {
    const popover = await this.popoverController.create({
      component: AdminnavigationComponent,
      translucent: true
    });
    return await popover.present();
  }
 

  createContestant(form: NgForm){
    console.log(form);
  }

  submitGameAmount(){
    this.loading = true;
    this.gameService.setGameAmount(this.amountModel).subscribe( res => {
      console.log('res ', res);
      this.loading = false;
      this.behaviorService.setGameAmount(res.data.amount);

      this.amountModel.amount = undefined;

    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

}
