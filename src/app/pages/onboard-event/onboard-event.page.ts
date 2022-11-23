import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { MenuController, ToastController } from '@ionic/angular';
import { AccountService } from '../../shared/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-onboard-event',
  templateUrl: './onboard-event.page.html',
  styleUrls: ['./onboard-event.page.scss'],
})

export class OnboardEventPage implements OnInit {
  constructor() { }

  ngOnInit() {}
}

