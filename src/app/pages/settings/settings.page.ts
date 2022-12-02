import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MenuController, ToastController } from '@ionic/angular';
import { AccountService } from '../../shared/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

  myProfile: any;
  image: any;
  username: String;
  fullname: String;
  userRecordNotAvalible: boolean = false;
  
  loading :boolean = true;
  emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    constructor(public userService: UserService,
                public menu: MenuController,
                public toastController: ToastController,
                public accountService: AccountService) {
                  
                  this.getMyProfile();
                 }

  ionViewWillEnter(){
    this.getMyProfile();
  }

  setNationality = {
    selectedOption : [
    ]
  }

  public settingRoutes = [
    {
      name: "User Profile",
      url: '/tabs/profile'
    },
    {
      name: "Account Details",
      url: '/tabs/account-details'
    },
    {
      name: "Dark Mode",
      url: '/tabs/theme'
    },
    {
      name: "Privacy and Policy",
      url: '/tabs/privacy-policy'
    },
    {
      name: "About",
      url: '/tabs/setting'
    },
    {
      name: "Faq",
      url: '/tabs/faq'
    },

  ]


  
  ngOnInit() {
    this.getMyProfile();
  }
  async presentFailNetwork() {
    const toast = await this.toastController.create({
      message: 'No internet connection!!!',
    });
    toast.present();
  }

  getMyProfile() {
    this.loading = true;
    this.userService.loadFullname();
    this.userService.getUsername().subscribe(name => this.username = name);
    this.userService.getFullname().subscribe(name => this.fullname = name);
    // this.model.name = this.userService.getUsername()
    console.log('username; ' + this.username);
    this.userService.getProfilePicture().subscribe(pic => this.image = pic);
    this.loading = false;
  }


}
