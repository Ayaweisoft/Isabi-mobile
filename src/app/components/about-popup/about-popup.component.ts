import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'about-popup',
  templateUrl: './about-popup.component.html',
  styleUrls: ['./about-popup.component.scss'],
})
export class AboutPopupComponent implements OnInit {
  isFirst: boolean = false;
  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public UserService: UserService
  ) { }

  ngOnInit() {
    console.log("popup called");
  }
  redirect(){
    this.loading = true;
    this.UserService.toggleIsFirst()
      .subscribe(
        res => {
          console.log('isFirst: ', this.isFirst)
          this.UserService.loadIsFirst();
          this.loading = false;
          this.router.navigate(['/tabs/profile']);
        },
        err => {
          console.log('error: ', err);
        }    
      );
  }

}
