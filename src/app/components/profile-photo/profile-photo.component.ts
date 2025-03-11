import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss'],
})
export class ProfilePhotoComponent implements OnInit {
  @Input()
  className: String;
  @Input()
  userNameVisible: boolean = true; 

  username: String;
  loading: boolean = true;
  image: any;

  constructor(public userService: UserService, private router: Router) {
    this.userService.loadProfilePicture();
    this.userService.getProfilePicture().subscribe(pic => this.image = pic );
    this.userService.getUsername().subscribe(name => this.username = name);
  }

  ngOnInit() {
    this.userService.getUsername().subscribe(name => this.username = name);
  }

  // ionViewWillEnter(){
  //   this.getProfilePic();
  //   this.username = this.userService.getUsername();
  // }

  handleClick() {
    //redirect to profile page
    this.router.navigate(['/tabs/profile']);
  }

}