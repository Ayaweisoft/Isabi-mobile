import { VoteNowComponent } from './../vote-now/vote-now.component';
import { UserService } from 'src/app/shared/user.service';
import { InsideEventAddUserComponent } from './../inside-event-add-user/inside-event-add-user.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, AlertController, IonRefresher } from '@ionic/angular';
import { EventService } from 'src/app/shared/event.service';
import { startWith, map, filter } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { LogicService } from 'src/app/services/logic.service';

@Component({
  selector: 'app-inside-event',
  templateUrl: './inside-event.component.html',
  styleUrls: ['./inside-event.component.scss'],
})
export class InsideEventComponent implements OnInit {
  @ViewChild('refresherRef', {static : false}) refresherRef: IonRefresher;
eventId;
loading = true;
contestant = [];
displayedContestant = [];
contestantData = [];
costPerVote = null;
personalLink = environment.webVotingUrl;
  eventRefresher: any;

  constructor(private route: ActivatedRoute, public modalController: ModalController,
    private logicService: LogicService,
              private eventService: EventService, public userService: UserService, public alertController: AlertController) { }

    searchModel = { name:''}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
     
    });

   
  }


  ionViewDidEnter() {
    
    this.eventRefresher = setInterval(() => {
      this.getAllContentant();
    },9000)
  }

  ionViewDidLeave() {
    clearInterval(this.eventRefresher);
  }

  initializeItems(){
    this.contestant = this.contestantData;
     }

     copyInputMessage(inputElement){
      inputElement.select();
      document.execCommand('copy');
      inputElement.setSelectionRange(0, 0);
      this.logicService.presentToast('text  coppied' );
    }



    parseText(text){
      let length =  15;
      text = text.length > length ? text.substring(0, length - 3) + '...' : text.substring(0, text.length - 3) + '...';
      return text;
    }

    getChildData(data){
      this.displayedContestant = data;
    }
  
  getItems() {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = this.searchModel.name;
   
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        // this.isItemAvailable = true;
        this.contestant = this.contestant.filter((item) => {
          return (item.nickname.indexOf(val) > -1);
    });
    }
    }

  getAllContentant(){
    this.eventService.getAllContestant(this.eventId).subscribe(
      res => {
        try {
          this.refresherRef.complete();
        } catch (error) {
          
        }
        this.loading = false;
        this.contestant = res['contestant'];
        console.log(this.contestant.length);
        this.contestantData = this.contestant;
        this.costPerVote = res['cost_per_vote'];
      },
      err => {
        try {
          this.refresherRef.complete();
        } catch (error) {
          
        }
        this.loading = false;
        this.userService.longToast(err.error.msg);
      }
    );
  }

  async doRefresh(refresher) {
    await this.getAllContentant();
   
   
  }

  async addUser() {
    const modal = await this.modalController.create({ component: InsideEventAddUserComponent,
      componentProps: {
        event_id: this.eventId, 
      }
   } );
    modal.onDidDismiss().then(() => {  
          // load all event
          this.getAllContentant();
    }
    );
    return await modal.present();
}


  async voteNow(event_id, contestant_id,image_url,nickname, my_code, fullname){
      const modal = await this.modalController.create({ component: VoteNowComponent,
        componentProps: {
          event_id, contestant_id,image_url,nickname, my_code,cost_per_vote: this.costPerVote,fullname
  
        }
     } );
      modal.onDidDismiss().then(() => {  
            // load all event
            this.getAllContentant();
      }
      );
      return await modal.present();
}

async deleteContestant(contestant) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: `Delete <strong>${contestant.nickname} </strong>!!!`,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          // console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.loading = true;
          this.eventService.deleteContestant(contestant._id).subscribe(
            res => {
              this.loading = false;
              this.userService.generalToast(res['msg'], 2000);
              this.getAllContentant();
            },
            err => {
              this.loading = false;
              this.userService.generalAlert(err.error.msg);
            }
          );
        }
      }
    ]
  });

  await alert.present();
}



}
