import { Router } from '@angular/router';
import { GameServiceService } from '../../shared/game-service.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { AdminnavigationComponent } from '../../components/adminnavigation/adminnavigation.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { BehavourService } from '../../services/behavour.service';
import { LogicService } from '../../services/logic.service';
import { FirebaseService } from 'src/app/services/firebase.service';
// import { UserService } from '../../shared/user.service';



@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.page.html',
  styleUrls: ['./admin-account.page.scss'],
})
export class AdminAccountPage implements OnInit {


 segment = 'game_category';


  loading  = false;
  currentAmount: any;

  constructor(public gameService: GameServiceService,
                private router: Router,
                private fireService: FirebaseService,
                public toastController: ToastController,
                public alertController: AlertController,
                // private userService: UserService,
                private logicService: LogicService,
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
   youtubeUrl:'',
 };

 promoCode = {
   amount : null,
   startDate : null,
   endDate :  null,
   promoCode :'',
   promoSlot : null
 }

 game_category = {
  name: '',
  icon: ''
 }

 categories: any;

  ngOnInit() {
    console.log('on it')
    this.behaviorService.getGameAmount().subscribe(amount => {
      this.currentAmount = amount;
    })
    this.getCategories();
  }

  getCategories() {
    console.log('get categories');
    this.loading = true;
    this.gameService.getCategories().subscribe(
      (res : { categories: any}) => {
        this.categories = res?.categories;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }



  segmentChanged($event){
    // console.log('event...', $event);
    this.segment = $event.detail.value;
  }


  

  selectedDate(event){
    // console.log(event);
  }

  submitDate(form : NgForm){
    // console.log(this.model.date);
  }

  submitSms(form : NgForm){
    // console.log(this.model.sms);
    const sms = {sms : this.model.sms};
    this.gameService.sendSms(sms).subscribe(
      res =>{

       console.log(res);
       let message = res['message'];
       this.gameService.presentToast(message);
      }
      
    );
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

  addCategory(form : NgForm){
    let category = this.game_category;
    this.loading = true;
    
    this.gameService.createCategory(category).subscribe(
      res => {
        this.loading = false;
        this.presentToast('Category added successfully')
        console.log({res})
        this.game_category = {
          name: '',
          icon: ''
        }
        // this.gameService.getAdminDate();
        // this.router.navigateByUrl('/tabs/gamesection');
      },
      err => {
        this.loading = false;
        this.presentToast('Error adding category')
      }
    );
  }

  async deleteCategory(event) {
    console.log('event', event)
    this.loading = true;
    this.gameService.deleteCategory(event._id).subscribe(
      res => {
        this.loading = false;
        // this.userService.generalToast(res['msg'], 2000);
        this.getCategories();
      },
      err => {
        this.loading = false;
        // this.userService.generalAlert(err.error.msg);
      }
    );
  }

  uploadImageToFireBase(image) {
    this.loading = true;
    try {
        this.fireService.uploadFile(image).then((success) => {
            const imageRef = success.ref.fullPath;
            this.fireService.downloadItem(imageRef).subscribe(imageUrl => {
              this.game_category.icon = imageUrl;
              this.loading = false;
            });
        });
    } catch (error) {
        this.loading = false;
        // console.log(error);
        this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
    }
  }



  addImagesFirebase(event) {
    const file = event.target.files[0];
    this.uploadImageToFireBase(file);
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


  submitPromo(){
    this.loading = true;
    this.gameService.savePromo(this.promoCode).subscribe( res => {
      this.loading = false;
      this.logicService.presentAlert('Success ','promo code has beend saved successfully.')
    }, err => {
      this.loading = false;
      this.logicService.presentAlert('error ','error saving promo code')
    })
  }



}
