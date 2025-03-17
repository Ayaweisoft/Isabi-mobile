import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountDetailsPageRoutingModule } from './account-details-routing.module';

import { AccountDetailsPage } from './account-details.page';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component'
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountDetailsPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [AccountDetailsPage]
})
export class AccountDetailsPageModule {}
