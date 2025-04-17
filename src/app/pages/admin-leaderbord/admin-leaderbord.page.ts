import { AccountService } from 'src/app/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController, AlertController } from '@ionic/angular';
import { AdminnavigationComponent } from '../../components/adminnavigation/adminnavigation.component';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-admin-leaderbord',
  templateUrl: './admin-leaderbord.page.html',
  styleUrls: ['./admin-leaderbord.page.scss'],
})
export class AdminLeaderbordPage implements OnInit {
  leaderBoard: any = [];
  leaderBoardCount: number;
  loading: boolean = false;
  sLoading: boolean = false
  segment = 'leaderboard';
  userDetails: any;
  popLoading: boolean = false;
  showDetails: boolean = false;

  constructor(  private popoverController: PopoverController,
    public toastController: ToastController,
    public userService: UserService,
    public accountService: AccountService, public alertController: AlertController) {
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
    this.segment = $event.detail.value;
  }

  changeCount(){
    this.loading = true;
    this.accountService.updateLeaderboardCount({count: this.leaderBoardCount}).subscribe((val: number)=> {
      this.presentSuccessToast();
      this.leaderBoardCount= null;
      this.loading = false;
    }, err => {
      this.loading = false;
      // this.userService.generalAlert(err.error.msg);
    })
  }

  getLeaderBoard() {
    this.loading = true;
    //generate curent week and year
    const date = new Date();
    const week = this.userService.getWeekNumber(date);
    const year = date.getFullYear();

    this.accountService.getLeaderboard(week, year).subscribe(val => {
      this.leaderBoard = val['leaders'];

      var playerMinutes;
      var playerSeconds;
      this.leaderBoard = this.leaderBoard.map(player => {
        player.minutes =  !player.time ? 0 : Math.floor(player.time / 60);
        player.seconds = !player.time ? 0 : Math.floor(player.time % 60);
        player.time = playerMinutes + " mins " + playerSeconds + " secs";
        return player;
      })

      this.loading = false;
    },
    err => {
      this.loading = false;
    }
    );
  }

  getMoreLeader() {
    this.sLoading = true;
    const limit = 20;
    //generate curent week and year
    const date = new Date();
    const week = this.userService.getWeekNumber(date);
    const year = date.getFullYear();
    const skip = this.leaderBoard.length + 1;
    this.accountService.getMoreLeaderboard(limit, skip, week, year).subscribe(val => {
      var leaders = val['leaders'];
      
      var playerMinutes;
      var playerSeconds;
      leaders = leaders.map(player => {
        player.minutes =  !player.time ? 0 : Math.floor(player.time / 60);
        player.seconds = !player.time ? 0 : Math.floor(player.time % 60);
        player.time = playerMinutes + " mins " + playerSeconds + " secs";
        return player;
      })
      this.leaderBoard = this.leaderBoard.concat(leaders);
      this.sLoading = false;
    });
  }

  showLeaderDetails(id: any){
    this.showDetails = true;
    this.getUserDetails(id);
  }

  closeUserDetails(){
    this.showDetails = false;
  }

  getUserDetails(id: any){
    this.popLoading = true;
    this.userService.getUserDetails(id).subscribe((val: any)=> {
      this.loading = false;
      // console.log("val: ", val['user']);
      this.userDetails = val['user'];
      this.popLoading = false;
    }, err => {
      this.popLoading = false;
      // this.userService.generalAlert(err.error.msg);
    })
  }


  getLeaderCount(){
    this.loading = true;
    this.accountService.getLeaderboardCount().subscribe((val: number)=> {
      this.leaderBoardCount = val;
      this.loading = false;
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
          }
        }, {
          text: 'Okay',
          handler: (val) => {
            this.loading = true;
            this.accountService.settleLeader(val.docID).subscribe(
              res => {
                this.loading = false;
                this.presentSuccessToast();
                this.getLeaderBoard();
              },
              error => {
                this.loading = false;
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
