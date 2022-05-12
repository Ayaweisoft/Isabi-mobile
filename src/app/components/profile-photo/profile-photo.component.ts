import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent implements OnInit {
  @Input()
  className: String; 

  username: String;
  loading: boolean = true;
  image: any;

  constructor(public userService: UserService,) {
    this.getProfilePic();
    this.username = this.userService.getUsername();
  }

  ngOnInit() {
    this.getProfilePic();
    this.username = this.userService.getUsername();
  }

  ionViewWillEnter(){
    this.getProfilePic();
    this.username = this.userService.getUsername();
  }

  getProfilePic() {
    this.loading = true;
    this.userService.getProfilePic().subscribe(
      res => {
        this.loading = false;
        this.image = res.image_url;
        console.log(this.image);
      },
      err => {
        this.loading = false;
      }
    )
  }

}