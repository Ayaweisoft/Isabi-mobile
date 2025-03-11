import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { LogicService } from 'src/app/services/logic.service';
import { AccountService } from 'src/app/shared/account.service';
import { EventService } from 'src/app/shared/event.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss'],
})
export class BuyTicketComponent implements OnInit {
  @Input() ticket;
  ticketForm: FormGroup;

  data = { quantity: 1 }
  balance: any;

  constructor(public modalController: ModalController, public navParams: NavParams,
    public accountService: AccountService, private eventService: EventService,
    private logicService: LogicService,
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private userService: UserService) {
    this.ticketForm = this.formBuilder.group({
      eventId: new FormControl(''),
      ticketId: new FormControl(''),
      ticketDatabaseId: new FormControl(''),
      parentTicket: new FormControl(''),
      amount: new FormControl(0),
      ticketType: new FormControl('',),
      mobile: new FormControl(true),
      imageUrl: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      user_id: new FormControl(''),

      numberOfTicket: new FormControl(0, [Validators.required]),
      amountPaid: new FormControl(0, [Validators.required]),
    });
  }

  ngOnInit() {
    this.randomString(6);

    this.model.user_id = this.userService.getAuthId();
    this.model.eventId = this.ticket.eventId;
    this.model.amount = this.ticket.amount;
    this.model.ticketType = this.ticket.ticketType;
    this.model.imageUrl = this.ticket.imageUrl;
    this.model.ticketDatabaseId = this.ticket._id;

    // this.ticketForm.get('user_id').setValue(this.userService.getAuthId());
    // this.ticketForm.get('eventId').setValue(this.ticket.eventId);
    // this.ticketForm.get('amount').setValue(this.ticket.amount);
    // this.ticketForm.get('ticketType').setValue(this.ticket.ticketType);
    // this.ticketForm.get('imageUrl').setValue(this.ticket.imageUrl);
    // this.ticketForm.get('ticketDatabaseId').setValue(this.ticket._id);
    this.accountService.getAccountBalance().subscribe(bal => this.balance = bal);
  }

  model = {
    user_id: '',
    eventId: '',
    amount: 0,
    ticketType: '',
    imageUrl: '',
    parentTicket: '',
    ticketId: '',
    ticketDatabaseId: '',
    numberOfTicket: 0,
    amountPaid: 0,
    name: '',
    phone: '',
    email: ''
  }


  randomString(len) {
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var shortpass = [...Array(len)].reduce(a => a + p[~~(Math.random() * p.length)], '');
    this.model.ticketId = shortpass;
    this.model.parentTicket = shortpass;
    // this.ticketForm.get('ticketId').setValue(shortpass);
    // this.ticketForm.get('parentTicket').setValue(shortpass);
    this.eventService.checkTicketIdIfExist(shortpass, this.ticket.eventId).subscribe(res => {
      console.log(res);
      this.randomString(6)
    }, err => {
      console.log(err);
    });
    return
  }



  closeModal() {
    this.modalController.dismiss();
  }

  add() {
    this.data.quantity++;

  }

  remove() {
    if (this.data.quantity !== 0) {
      this.data.quantity--;
    }
  }

  finalize() {
    if (this.data.quantity < 1) {
      return this.logicService.presentToast('One or more field is required')
    }
    console.log('model: ', this.model)
    console.log('val: ', this.ticketForm.value)
    let costPerTicket = this.model.amount * this.data.quantity;
    // let costPerTicket = this.ticketForm.get('amount').value * this.data.quantity;
    let remainBalance = this.balance - costPerTicket;

    this.model.numberOfTicket = this.data.quantity;
    this.model.amountPaid = costPerTicket;
    // this.ticketForm.get('numberOfTicket').setValue(this.data.quantity);
    // this.ticketForm.get('amountPaid').setValue(costPerTicket);

    if (remainBalance > 1) {
      this.eventService.savePurchaseTicket(this.model).subscribe(newTicket => {
        console.log('count: ', newTicket);
        this.modalController.dismiss({ data: newTicket });
        this.randomString(6);
        this.logicService.presentSucess('success', 'ticket purchase successful ', '')
        this.accountService.loadMyBalance();

      }, err => {
        console.log(err);
      }) 

    } else {
      this.userService.longToast('balance is to low!');
      console.log('balance to low for this purchase');

    }
  }

}
