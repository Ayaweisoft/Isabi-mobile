import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MenuController, ToastController } from '@ionic/angular';
import { AccountService } from '../../shared/account.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  myProfile: any;
  userRecordNotAvalible: boolean = false;
  image: any;
  username: any = 'oracle247';
  
  loading :boolean = true;
  emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    constructor(private userService: UserService,
                public menu: MenuController,
                private fireService: FirebaseService,
                private logicService: LogicService,
                public toastController: ToastController,
                public accountService: AccountService) {
                  this.getMyProfile();
                  this.getProfilePic();
                  console.log('username; ' + userService.getUsername())
                  this.model.name = userService.getUsername()
                 }

                 
  model = {
    name: '',
    fullname: '',
    username: '',
    email: '',
    phone: '',
    date_of_birth: '', 
  }

  setNationality = {
    selectedOption : [
    ]
  }

  picModel = {
    name: '',
    image_url: ''
  }



  
  ngOnInit() {
  }
  async presentFailNetwork() {
    const toast = await this.toastController.create({
      message: 'No internet connection!!!',
    });
    toast.present();
  }


  createProfile(form : NgForm){
    this.loading = true;
      console.log('before saving' + this.model);
     
      this.userService.updateUserProfile(this.model).subscribe(res => {
        
        this.loading = false;
        this.getMyProfile();
      },
      err => {
        
        this.loading =false;
        console.log(err);
      });
  }

  // selectChange( $event) {
  //   console.log($event);
  //   this.model.nationality = $event;
  //   // this.setNationality.selectedOption = $event;
  //     }

      getMyProfile() {
        this.model.name = this.userService.getUsername()
        this.userService.getUserProfile().subscribe(
          res => {
            this.loading = false;
            this.myProfile = res;
            
            console.log(this.myProfile);
            this.userRecordNotAvalible = false;
          },
          err => {
            this.loading = false;
            this.userRecordNotAvalible = true;
          }
        );
      }

      getProfilePic() {
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

      uploadImage(image){
        this.userService.updateProfilePic(image).subscribe(res => {
          console.log(res);
          this.loading = false;
        },
        err => {       
          this.loading =false;
          console.log(err);
        });
      }

      addImagesFirebase(event) {
        const files = event.target.files;
        const j = files.length;
        let file;
        for (let i = 0; i < j; i++) {
            const reader = new FileReader();
            file = files[i];
            console.log(file);
            this.uploadImageToFireBase(file);
        }
    } 
    
    uploadImageToFireBase(image) {
      this.loading = true;
      try {
          this.fireService.uploadFile(image).then((success) => {
              const imageRef = success.ref.fullPath;
              this.fireService.downloadItem(imageRef).subscribe(imageUrl => {
                this.image = imageUrl;
                this.picModel.image_url = imageUrl;
                this.picModel.name = this.userService.getUsername();
                this.uploadImage(this.picModel);
                this.loading = false;
              });
          });
      } catch (error) {
          this.loading = false;
          console.log(error);
          this.logicService.presentAlert('Error uploading document', ' check your connection and try again.');
      }
    }

}
