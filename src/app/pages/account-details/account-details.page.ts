
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MenuController, ToastController } from '@ionic/angular';
import { AccountService } from '../../shared/account.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogicService } from 'src/app/services/logic.service';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
})
export class AccountDetailsPage implements OnInit {

  myProfile: any;
  userRecordNotAvalible: boolean = false;
  image: any;
  showAccount: boolean= false;
  username: any;
  banks: Array<any> = [];
  disableInput: boolean = true;
  showName: boolean = false;
  nameLoading: boolean = false;
  
  loading :boolean = true;
  emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    constructor(private userService: UserService,
                public menu: MenuController,
                private fireService: FirebaseService,
                private logicService: LogicService,
                public toastController: ToastController,
                public accountService: AccountService) {
                  this.getProfilePic();
                  console.log('username; ' + userService.getUsername())
                  userService.getUsername().subscribe(name => this.model.name = name);
                 }

                 
  bankModel = {
    accountNumber: '',
    bankName: '',
    bankCode: ''
  }

  model = {
    name: '',
    accountName: '',
    ...this.bankModel,
  }

  otpModel = {
    accountOtp: ''
  }

  setBank = {
    selectedOption : [
    ]
  }

  picModel = {
    name: '',
    image_url: ''
  }

  ngOnInit() {
    this.getBanks();
  }

  ionViewWillEnter(){
    this.getProfilePic();
    this.userService.sendAccountOtp().subscribe(
      res => {
        console.log("message: ", res);
      },
      err => {
        console.error("error: ", err.error.message)
      }
    )
    console.log('username; ' + this.userService.getUsername());
    this.userService.getUsername().subscribe(name => this.model.name = name);
  }

  ionViewWillLeave(){
    this.showAccount = false;
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
        this.getMyProfile();
      },
      err => {
        
        this.loading =false;
        console.log(err);
      });
  }

  selectChange(value: any) {
    console.log("bank: ", value);
    this.bankModel.bankName = value;


    this.bankModel.bankCode = this.banks.filter(bank => bank.bank_name === value)[0].nip_bank_code;
    console.log("bank: ", this.bankModel.bankCode);
    this.disableInput = false;
  }

  inputChange(value: any) {
    console.log("val: ", value);
    if(value.length === 10){
      console.log("account: ", this.bankModel)
      this.bankModel.accountNumber = value;
      console.log("resolving account....");
      this.resolveAccount();
    }
  }
  
  getMyProfile() {
    // this.model.name = this.userService.getUsername()
    this.userService.getUsername().subscribe(name => this.model.name = name);
    this.userService.getUserProfile().subscribe(
      res => {
        this.myProfile = res;
        
        console.log('profile: ', this.myProfile);
        this.loading = false;
        this.userRecordNotAvalible = false;
      },
      err => {
        this.loading = false;
        this.userRecordNotAvalible = true;
      }
    );
  }

  getBanks() {
    this.accountService.getBanks().subscribe(
      res => {
        const result: any = res;
        this.banks = result?.data?.banks
        console.log('res: ', res);
        console.log('banks: ', this.banks);
        this.loading = false;
      },
      err => {
        console.log('err: ', err)
        this.loading = false;
      }
    );
  }

  resolveAccount() {
    this.nameLoading = true;
    this.accountService.resolveAccount(this.bankModel).subscribe(
      res => {
        console.log('res: ', res);
        let result: any = res;
        this.model.accountName = result?.data?.account_name;
        this.showName = true;
        this.nameLoading = false;
      },
      err => {
        console.log('err: ', err)
        this.nameLoading = false;
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
                this.userService.getUsername().subscribe(name => this.picModel.name = name);
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

    validateOtp(){
      this.loading = true;
      console.log(this.otpModel)
      this.userService.validateAccountOtp(this.otpModel).subscribe(
        res => {
          this.loading = false;
          this.showAccount = true;
          this.logicService.presentAlert('Otp Validation', 'User Validation Successful');
          console.log(res);
          this.getMyProfile();

        },
        err => {
          this.loading = false;
          this.logicService.presentAlert('Otp Validation', `Otp Validation Failed: ${err.error.message}`);
        }
      )
    }


}
