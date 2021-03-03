import { VoteNowComponent } from './../vote-now/vote-now.component';
import { UserService } from 'src/app/shared/user.service';
import { InsideEventAddUserComponent } from './../inside-event-add-user/inside-event-add-user.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { EventService } from 'src/app/shared/event.service';
import { startWith, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-inside-event',
  templateUrl: './inside-event.component.html',
  styleUrls: ['./inside-event.component.scss'],
})
export class InsideEventComponent implements OnInit {
eventId;
loading = true;
contestant = [];
contestantData = [];
costPerVote = null;

  constructor(private route: ActivatedRoute, public modalController: ModalController,
              private eventService: EventService, public userService: UserService, public alertController: AlertController) { }

    searchModel = { name:''}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
     
    });

    console.log('inside event')
    this.getAllContentant();
  }

  initializeItems(){
    this.contestant = this.contestantData;
     }
 


  
  getItems() {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = this.searchModel.name;
    console.log(val);
   
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        // this.isItemAvailable = true;
        this.contestant = this.contestant.filter((item) => {
          console.log(item);
          return (item.nickname.indexOf(val) > -1);
    });
    }
    }

  getAllContentant(){
    console.log('getting contestant');
    this.eventService.getAllContestant(this.eventId).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.contestant = res['contestant'];
        this.contestantData = this.contestant;
        this.costPerVote = res['cost_per_vote'];
      },
      err => {
        this.loading = false;
        console.log(err);
        this.userService.longToast(err.error.msg);
      }
    );
  }

  async addUser() {
    console.log(this.eventId);
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
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay', contestant);
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
