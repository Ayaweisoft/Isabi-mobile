import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcctPagePageRoutingModule } from './acct-page-routing.module';

import { AcctPagePage } from './acct-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcctPagePageRoutingModule
  ],
  declarations: [AcctPagePage]
})
export class AcctPagePageModule {}
