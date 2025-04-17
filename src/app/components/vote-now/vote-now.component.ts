import { UserService } from 'src/app/shared/user.service';
import { EventService } from 'src/app/shared/event.service';
import { AccountService } from './../../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-vote-now',
  templateUrl: './vote-now.component.html',
  styleUrls: ['./vote-now.component.scss'],
})
export class VoteNowComponent implements OnInit {
loading = false;
  balance: any;

  constructor(public modalController: ModalController, public navParams: NavParams,
              public accountService: AccountService, private eventService: EventService,
              private userService: UserService) {
                accountService.loadMyBalance();
                // console.log( navParams.get('event_id'));
                this.properties.event_id = navParams.get('event_id');
                this.properties.contestant_id = navParams.get('contestant_id');
                this.properties.image_url = navParams.get('image_url');
                this.properties.nickname = navParams.get('nickname');
                this.properties.my_code = navParams.get('my_code');
                this.properties.cost = navParams.get('cost_per_vote');
                this.properties.fullname = navParams.get('fullname');

          

   }

   properties = {event_id:  '', contestant_id: '', image_url: '', 
                 nickname: '',my_code: '', cost:null, purchase: 0, fullname:''};

  ngOnInit() {
    this.accountService.getAccountBalance().subscribe(bal =>  this.balance = bal)
  }


  closeModal(){
    this.modalController.dismiss();
  }

  add(){
    this.properties.purchase ++;

  }

  remove(){
 this.properties.purchase --;
  }

  finalize(){
    let costPerVate = this.properties.purchase * this.properties.cost;
    let totalCost = this.balance - costPerVate ;
   
    if( totalCost > 1){
      // console.log('we can bid for this');
      this.loading = true;
      this.eventService.submitVote(this.properties).subscribe(
          res => {
            this.loading = false;
            this.userService.shortToast(res['msg']);
            this.closeModal();
          },
          err => {
            this.loading = false;
            this.userService.longToast(err.error.msg);
          }
        );

    }else{
      this.userService.longToast('balance is to low!');
      // console.log('balance to low for this purchase');

    }

  

  }

}
