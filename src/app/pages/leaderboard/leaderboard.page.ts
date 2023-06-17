import { filter } from 'rxjs/operators';
import { AccountService } from "src/app/shared/account.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MenuController, ToastController, IonRefresher } from "@ionic/angular";
import { UserService } from "../../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-leaderboard",
  templateUrl: "./leaderboard.page.html",
  styleUrls: ["./leaderboard.page.scss"]
})
export class LeaderboardPage implements OnInit {
  @ViewChild('refresherRef', {static : false}) refresherRef: IonRefresher;
  leaderBoard: any = [];
  loading: boolean;
  sLoading: boolean;
  topThree: any;
  thirdPerson: any;
  secondPerson: any;
  firstPerson: any;

  constructor(
    public menu: MenuController,
    private userService: UserService,
    private router: Router,
    public toastController: ToastController,
    public accountService: AccountService
  ) {
    this.getLeaderBoard();
  }

  ngOnInit() {}

  async presentFailNetwork() {
    const toast = await this.toastController.create({
      message: "No internet connection!!!"
    });
    toast.present();
  }
  gotoGame() {
    this.router.navigate(["gamesection"]);
  }

  async doRefresh(refresher) {
    console.log('Begin async operation');
    await this.getLeaderBoard();
    this.refresherRef.complete();
  
  }

  getLeaderBoard() {
    this.loading = true;
    //generate curent week and year
    const date = new Date();
    const week = this.userService.getWeekNumber(date);
    const year = date.getFullYear();

    this.accountService.getLeaderboard(week, year).subscribe(val => {
      this.leaderBoard = val['leaders'];
      console.log('leader: ', this.leaderBoard)
      // this.leaderBoard = this.leaderBoard.map(player => {
      //   player.time =  !player.time ? 0 : player.time;
      //   if (player.time > 60) { 
      //     player.time = `${Math.floor(player.time / 60)} mins ${Math.floor(player.time % 60)} secs`
      //   } else {
      //     player.time = player.time + " secs"
      //   }
      //   return player;
      // })
      var playerMinutes;
      var playerSeconds;
      this.leaderBoard = this.leaderBoard.map(player => {
        player.minutes =  !player.time ? 0 : Math.floor(player.time / 60);
        player.seconds = !player.time ? 0 : Math.floor(player.time % 60);
        player.time = playerMinutes + " mins " + playerSeconds + " secs";
        return player;
      })

      console.log('leader: ', this.leaderBoard)
      this.firstPerson = this.leaderBoard[0];
      this.secondPerson = this.leaderBoard[1];
      this.thirdPerson = this.leaderBoard[2];
      console.log('getting leaderboard')
      console.log(this.leaderBoard)
      this.loading = false;
    },
    err => {
      this.presentFailNetwork();
      console.log('error: ', err)
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
    const skip = this.leaderBoard.length;
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
      console.log('leader: ', this.leaderBoard)
      
      // this.leaderBoard = this.leaderBoard.map(player => {
      //   player.time =  !player.time ? 0 : player.time;
      //   if (player.time > 60) {

      //     player.time = `${Math.floor(player.time / 60)} mins ${Math.floor(player.time % 60)} secs`
      //   }
      //   return player;
      // })


      console.log('getting leaderboard')
      console.log(this.leaderBoard)
      this.sLoading = false;
    });
  }


}
