import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/account.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {
  segment= 'direct';
  showCard: boolean = true;
  loading: boolean = true;
  user_rank: string = 'Entry';
  username: string = '';
  referredlv1: any = [];
  referredlv2: any = [];
  image: any = [];
  myProfile: any;
  referralCode: string = '';
  totalReferredCount: number = 0;
  refBonus_claim: boolean = false;
  locked: boolean = true;

  model = {
    referralBonus: 0
  }

  rank = [
    {
      name: 'Entry',
      range: '0 - 100',
      isAttained: false
    },
    {
      name: 'Pearl',
      range: '100 - 200',
      isAttained: false
    },
    {
      name: 'Emerald',
      range: '500 - 1000',
      isAttained: false
    },
    {
      name: 'Saphire',
      range: '1000 - 2000',
      isAttained: false
    },
    {
      name: 'Platinium',
      range: '2000 - 4000',
      isAttained: false
    },
    {
      name: 'Diamond',
      range: '4000 - 8000',
      isAttained: false
    },
    {
      name: 'Black Diamond',
      range: '8000 above',
      isAttained: false
    }
  ]

  constructor(private userService: UserService,
    private accountSerice: AccountService
  ) {
    this.getMyProfile();
    // this.userService.getProfilePicture().subscribe(pic => this.image = pic);
  }

  ngOnInit() {
    this.getMyProfile();
  }

  ionViewWillEnter(){
    this.getMyProfile();
  }

  getMyProfile() {
    // this.username = this.userService.getUsername()
    this.userService.loadUsername();
    this.userService.loadRank();
    this.userService.loadTotalReferrredCount();

    this.userService.getUsername().subscribe(name => this.username = name);
    console.log('username: ' + this.username);
    this.userService.getRank().subscribe(rank => this.user_rank = rank);
    console.log('user rank: ' + this.user_rank);
    this.userService.getTotalReferredCount().subscribe(tot => this.totalReferredCount = tot);
    console.log('total count: ' + this.totalReferredCount);

    this.userService.getUserProfile().subscribe(
      res => {
        this.loading = false;
        this.myProfile = res;
        this.referredlv1 = res.referredlv1;
        this.referredlv2 = res.referredlv2;
        // this.totalReferredCount = res.totalReferredCount;
        this.referralCode = res.referralCode;
        this.model.referralBonus = res.referralBonus;
       
        console.log(this.myProfile);
        // this.userRecordNotAvalible = false;
      },
      err => {
        this.loading = false;
        // this.userRecordNotAvalible = true;
      }
    );
  }

  claimReferralBonus(bonus: number){
    this.refBonus_claim = true;
    console.log('bonus: ', bonus);
    this.accountSerice.claimReferralBonus(bonus).subscribe(data => {
      this.accountSerice.loadMyBonus();
      console.log("data: " + data)
    });
  }

  toggleCard(){
    // if(this.showCard){

    // }
    for(let rank of this.rank){
      rank.isAttained = true;
      if(rank.name == this.user_rank){
        rank.isAttained = true;
        break;
      }
    }
    this.showCard = !this.showCard;
  }

  segmentChanged(ev){
    // console.log(ev)
    this.segment = ev.detail.value;
  }

}
