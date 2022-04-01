import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaysectionPage } from './playsection.page';
import { CountdownTimerComponent } from 'src/app/components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';

const routes: Routes = [
  {
    path: '',
    component: PlaysectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaysectionPage, CountdownTimerComponent, ClueTipsComponent, LoadingSpinnerComponent]
})
export class PlaysectionPageModule {}
