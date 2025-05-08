import { Subscription, Observable } from 'rxjs';
import { GameServiceService } from '../../shared/game-service.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { AccountService } from 'src/app/shared/account.service';


import { ModalController, AlertController, ToastController, Platform } from '@ionic/angular';

import { NgModel } from '@angular/forms';
import { LogicService } from 'src/app/services/logic.service';
import { TransactionService } from 'src/app/services/transaction.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, OnDestroy {
  reference: any;
  title: any;
  scheduled :  any;
  userEmail: any;
  appUsername: any;
  // amountInput: any;
  paymentDoneSub : any;
  // exactAmount: any;
  paymentOptions: any;
  showPaymentButtons : boolean = false;
  successCodes: string[] = ["10", "11", "00"];
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string; 
  loading: boolean;

  balance: any;

  customerDetails = { name: this.userService.getUsername(), email: this.userService.getEmail(), phone_number: '',
  merchantCode: this.transService.merchant_code, payItemID: this.transService.pay_item_id}
  

  constructor(private router: Router, public userService: UserService,
              public accountService: AccountService,
              public gameSevice : GameServiceService,
              private transService: TransactionService,
              private platform: Platform,
              private logicService: LogicService,
              public alertController: AlertController,
              public toastController: ToastController,
              public modalController: ModalController
             ) {  
                this.accountService.loadMyBalance();
                // console.log('REF2', this.reference);

}

model = {
  amount: null, 
  actual: null,
  cashout: '',
  username: ''
};



ngOnInit() {

  // console.log('REF', this.reference);
  // console.log('trans ref', )
  this.appUsername = localStorage.getItem('appUser');
  this.model.username = this.appUsername;

  this.accountService.getAccountBalance().subscribe(bal => {
    this.balance = bal;
  })
}

ionViewDidEnter() {
  this.generateReference()
}


ngOnDestroy() {
  // this.paymentDoneSub = '';
  this.model = {
      amount: null,
      cashout: '',
      username: '',
      actual:''
    };
}


updateBalance(response: any) {
  this.generateReference();
  response.date = Date.now();
  response.account_id  = this.userService.getAuthId();
  response.ref  = response.retRef;
  response.username  = this.userService.getUsername();
  response.user_id  = this.userService.getAuthId();
  response.transaction  = response.txnref;
  response.amount  =  this.model.actual;
  // console.log('final response ', response);
  this.paymentDoneSub = this.userService.postTransaction(response).subscribe(
    res => {
      // console.log('new balance',res);
      this.logicService.presentAlert('Thank you', 'your account has been credited successfully. reload if not reflect.')
     this.accountService.loadMyBalance();
      
  
     this.generateReference();
    },
    err => {
     this.generateReference()
     this.accountService.loadMyBalance();
    }
  );
}

paymentCallback(response: any): void {
  console.log("RESULT", {response});
  if(response.resp == "00"){
    this.updateBalance(response);
  } else{
    const data = {
      merchantcode: "MX46047",
      reference: response?.txnref,
      amount: !!response?.amount ? response?.amount : this.model?.amount,
    }
    console.log('verify', {data});
    this.userService.verifyPayment(data).subscribe(
      (res) => {
        console.log('verify', {res});
        if (this.successCodes.includes(res["ResponseCode"])) {
          this.updateBalance(response);
        } else {
            this.logicService.presentAlert('failed', 'your transactions has failed, please try again')
        }
      },
      (err) => {
       this.generateReference()
       this.logicService.presentAlert('failed', 'your transactions has failed, please try again')
      }
    )
  }

}


closedPaymentModal(): void {
  this.generateReference();
  // console.log('payment is closed');
  this.model.amount = null;

 
}

generateReference() {
  let date = new Date();
  this.reference = date.getTime().toString();
}

submitProCode(promo){
  this.loading = true;
  // console.log(promo)
 let data = {promoCode : promo}
  this.accountService.activatePromo(data).subscribe(data => {
    // console.log(data);
    this.loading = false;
    this.logicService.presentAlert('success', 'your account has been credited');
    this.accountService.loadMyBalance();
  }, err => {
    this.loading = false;
    this.logicService.presentAlert('not fount', err.error.message);
    // console.log(err);
  })

}

showNotiAlert(header, sub, msg){
  this.alertController.create({
    header: header,
    subHeader : sub,
    message : msg,
    buttons : ['ok']
  }).then((alert) =>  alert.present() );
}

paymentCancel(){
  this.showPaymentButtons = false;
  this.generateReference();
  // this.amountInput = null;
}

// paymentDone(process: any) {
//   this.showPaymentButtons = false;
//   process.username = this.appUsername;
//   process.amount = this.model.amount;

//   this.paymentDoneSub = this.userService.postTransaction(process).subscribe(
//     res => {
//      this.accountService.loadMyBalance();
      
//      this.generateReference()
//     },
//     err => {
//      this.generateReference()
//      this.accountService.loadMyBalance();
//     }
//   );
  // console.log( process);
//  }


 profileSection(){
  this.router.navigate(['/tabs/profile']);
}

 payNow(){
  // console.log('pay now is clicked..', this.reference);
  
}

// mobileTransfer(){
  // console.log(this.model.amount.valueOf());
//   this.showAlert();
// }


// async showAlert() {
//   const alert = await this.alertController.create({
//     header: 'MOBILE TRANSFER',
//     message: `Add this id (${this.accountService.user_id})
//     to your mobile transfer info. <br> after a successful transfer click OK.
//              <p><h6 class=" font-weight-bold">Account Number: 3585745013</h6></p>
//              <p><h6  class="font-weight-bold">Bank : FCMB </h6></p>
//              <p><h6  class=" fiont-weight-bold">Account Name : Ayaweisoft </h6></p>
//              <p> <h4 class=" fiont-weight-bold"> Amount : ₦ ${this.model.amount}</h4></p>`,
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         cssClass: 'secondary', 
//         handler: () => {
//          this.showPaymentButtons = false;
//          this.generateRef();
//         }
//       }, {
//         text: 'Okay',
//         handler: () => {
//          this.showPaymentButtons = false;
//          const process = { username : this.appUsername , amount: this.model.amount, status : 'processing',
//           trxref: this.reference, account_id: this.accountService.user_id, transaction : ' manual transfer'};

//          process.username = this.appUsername;
        //  console.log('Confirm Okay', process);
//          this.userService.postManualTrans(process).subscribe(
//             res => {
              // console.log(res);
//               this.presentSucess();
//             },
//             err => {
              // console.log(err); 
//             }
//           );
//         }
//       }
//     ]
//   });

//   await alert.present();
// }

// async presentSucess() {
//   this.showPaymentButtons = false;
//   const toast = await this.toastController.create({
//     message: 'Your account will be updated shortly.',
//     position: 'middle',
//     duration: 4000
//   });
//   toast.present(); 
// }


async enterAmountInput() {
  const alert = await this.alertController.create({
    header: 'ENTER AMOUNT',
    inputs: [
      {
        name: 'amount',
        type: 'text',
        placeholder: 'Enter amount'
      }],
 
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (blah) => {
          // console.log('cancel amount input');
          this.generateReference()
        }
      }, {
        text: 'Confirm',
        cssClass : 'success',
        handler: (val) => {
          // console.log(val.amount)
          // console.log(typeof(val.amount))
          this.showPaymentButtons = true;
          this.model.amount = val.amount+'00'
          this.model.actual = val.amount
        }
      }
    ]
  });

  await alert.present();

}

// async presentAmountInput() {
//   const alert = await this.alertController.create({
//     header: 'ENTER AMOUNT',
//     inputs: [ {
//         name: 'amount',
//         type: 'text',
//         placeholder: 'example 2000'
//       }],
//     buttons: [ {
//         text: 'Cancel',
//         role: 'cancel',
//         cssClass: 'secondary',
//         handler: (blah) => {
          // console.log('Confirm Cancel: blah');
//         }
//       }, {
//         text: 'Okay',
//         handler: (value) => {
          // console.log('Confirm Okay', value);
//           this.model.amount = value.amount;
//           this.payNow();
//         }
//       }
//     ]
//   });

//   await alert.present();
// }

// cashout
async enterCashoutAmount() {
  const alert = await this.alertController.create({
    header: 'ENTER CASHOUT',
    inputs: [
      {
        name: 'amount',
        type: 'text',
        placeholder: 'Enter amount'
      }],
 
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'danger',
        handler: (blah) => {
          // console.log('cashout is canceled');
        
        }
      }, {
        text: 'Confirm',
        cssClass : 'success',
        handler: (val) => {
          this.model.cashout = val.amount;
          const userCashout = parseInt(this.model.cashout);

          if ( userCashout < 500){
           let  msg = "cashout must be greater that 500!";
            this.gameSevice.presentToast(msg);
          }else{

       
          this.accountService.cashout(this.model).subscribe(
          res => {

            // console.log(res);
            this.accountService.loadMyBalance();
            this.cashoutSuccess();
          },
          err => {
            // console.log(err);
            this.gameSevice.presentToast(err.error.message);
          }
        );
      }
        }
      }
    ]
  });

  await alert.present();
}



async cashoutSuccess() {
  const alert = await this.alertController.create({
    header: 'CASHOUT SUCCESSFUL',
    message : `your cashout of ₦${this.model.cashout} was successful`,
   
 
    buttons: [
     {
        text: 'Ok',
        cssClass : 'success',
        handler: () => {
          // console.log('ok');
        }
      }
    ]
  });

  await alert.present();
}
} 
