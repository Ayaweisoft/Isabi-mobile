import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountNewPageRoutingModule } from './account-new-routing.module';
import { NgInterswitchModule } from '@interswitchapi/ng-interswitch';
// import { NgOtpInputModule } from 'ng-otp-input';

import { AccountNewPage } from './account-new.page';
import {ProfilePhotoComponent} from '../../components/profile-photo/profile-photo.component'
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountNewPageRoutingModule,
    NgInterswitchModule,
    SharedComponentsModule,
    // NgOtpInputModule
  ],
  declarations: [AccountNewPage]
})
export class AccountNewPageModule {}
