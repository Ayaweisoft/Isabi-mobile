import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { UtilityPage } from './utility.page';
import { BankFilterPipe } from 'src/app/pipes/bank-filter.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: UtilityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
    NgSelectModule
  ],
  declarations: [UtilityPage, BankFilterPipe]
})
export class UtilityPageModule {}
