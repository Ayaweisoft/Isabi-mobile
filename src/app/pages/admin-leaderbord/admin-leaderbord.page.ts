import { AccountService } from 'src/app/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { AdminnavigationComponent } from '../../components/adminnavigation/adminnavigation.component';

@Component({
  selector: 'app-admin-leaderbord',
  templateUrl: './admin-leaderbord.page.html',
  styleUrls: ['./admin-leaderbord.page.scss'],
})
export class AdminLeaderbordPage implements OnInit {
  leaderBoard: any;
  leaderBoardCount: number;
  loading: boolean = false;
  segment = 'leaderboard';

  constructor(  private popoverController: PopoverController,
    public toastController: ToastController,
    public accountServive: AccountService, public alertController: AlertController) {
      this.getLeaderBoard();
     } 

  ngOnInit() {
    this.getLeaderBoard();
    this.getLeaderCount();
  }

  async presentNavigation() {
    const popover = await this.popoverController.create({
      component: AdminnavigationComponent,
      translucent: true
    });
    return await popover.present(); 
  }

  segmentChanged($event){
    // console.log('event...', $event);
    this.segment = $event.detail.value;
  }

  changeCount($event){
    console.log('change count event...', this.leaderBoardCount);
    this.loading = true;
    this.accountServive.updateLeaderboardCount({count: this.leaderBoardCount}).subscribe((val: number)=> {
      console.log('count updated', val);
      this.presentSuccessToast();
      this.leaderBoardCount= null;
      this.loading = false;
    }, err => {
      this.loading = false;
      // this.userService.generalAlert(err.error.msg);
    })
  }

  getLeaderBoard(){
    this.loading = true;
    this.accountServive.getLeaderboard().subscribe((val)=> {
      this.leaderBoard = val['leaders'];
      this.loading = false;
      console.log('leader', this.leaderBoard);
    }, err => {
      this.loading = false;
      // this.userService.generalAlert(err.error.msg);
    })
  }
  getLeaderCount(){
    this.loading = true;
    this.accountServive.getLeaderboardCount().subscribe((val: number)=> {
      this.leaderBoardCount = val;
      this.loading = false;
      console.log('leaderboard', this.leaderBoardCount);
    }, err => {
      this.loading = false;
      // this.userService.generalAlert(err.error.msg);
    })
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Confirm Settlement!',
      message: 'Settlement will delete this user from the leaderboard!!!',
    
      inputs: [
        {
          name: 'docID',
          value: id,
          type:'password',
          disabled: true
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (val) => {
            this.loading = true;
            console.log('Confirm Okay', val.docID);
            this.accountServive.settleLeader(val.docID).subscribe(
              res => {
                this.loading = false;
                console.log(res);
                this.presentSuccessToast();
                this.getLeaderBoard();
              },
              error => {
                this.loading = false;
                console.log(error);
              }
            );
          }
        }
      ]
    });

    await alert.present();
  } 

  async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Updated!!',
      position: 'middle',
      duration: 3000
    });
    toast.present(); 
  }

}
