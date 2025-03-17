import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';


import { IonicModule } from '@ionic/angular';

import { AdminAccountPage } from './admin-account.page';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: AdminAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [AdminAccountPage]
})
export class AdminAccountPageModule {}
