import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDetailsPageRoutingModule } from './account-details-routing.module';

import { AccountDetailsPage } from './account-details.page';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDetailsPageRoutingModule
  ],
  declarations: [AccountDetailsPage, LoadingSpinnerComponent]
})
export class AccountDetailsPageModule {}
