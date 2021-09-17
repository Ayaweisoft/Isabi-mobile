import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicService } from 'src/app/services/logic.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-web-voting',
  templateUrl: './web-voting.component.html',
  styleUrls: ['./web-voting.component.scss'],
})
export class WebVotingComponent implements OnInit {
  contestanId: string;

  properties = {event_id:  '', contestant_id: '', image_url: '', 
  nickname: '',my_code: '', cost: null, purchase: 0, fullname: ''};
  loading: boolean;

  constructor(private userService: UserService,
    private router : Router, private activateRoute: ActivatedRoute, private logicService: LogicService) { }

  ngOnInit() {

    this.loading =  true;
    this.activateRoute.queryParams.subscribe(params => {
      this.contestanId = this.activateRoute.snapshot.params['id'];
      if(this.contestanId){
       let data = {id : this.contestanId}
        this.userService.getContestantById(data).subscribe( (contestant: any) => {
          console.log(contestant);
          this.loading = false;
          this.properties.contestant_id = contestant['contestant']._id;
          this.properties.event_id = contestant['contestant'].event_id;
          this.properties.fullname = contestant['contestant'].fullname;
          this.properties.image_url = contestant['contestant'].image_url;
          this.properties.my_code = contestant['contestant'].my_code;
          this.properties.nickname = contestant['contestant'].nickname;
          this.properties.cost = contestant['cost_per_vote'];
        }, err => {
          this.loading = false;
          this.logicService.presentAlert('Error getting contestant', ' it could be cause by connection error, check your connection and try again')
          console.log(err);
        })
      }
   });
  }


  add(){
    this.properties.purchase ++;

  }

  remove(){
 this.properties.purchase --;
  }

  finalize(){

    //  final submission here
  }

}
