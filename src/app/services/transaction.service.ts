import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  merchant_code = 'MX46047';
  pay_item_id  = 'Default_Payable_MX46047';
  site_redirect_url  = ''; 
  // site_redirect_url  = 'https://i-sabi.heroku.com'; 
  txn_ref  = ''; 
  amount  =  undefined;
  currency  =  '566';
  cust_name  =  '';
  cust_email  =  '';
  cust_id  =  '';
  pay_item_name  =  'i sabi mobile pay';


  constructor(private modalController: ModalController, private router: Router) { }

  setAmount(amount: number){
    this.amount = amount;
  }

  setTransRef(trans_ref: string){
    this.txn_ref = trans_ref;
  }

  setCustomerName(name: string){
    this.cust_name =  name;
  }

  setCustId(id: string){
    this.cust_id =  id;
  }
  setPayItem(item: string){
    this.pay_item_name =  item;
  }



}
 

