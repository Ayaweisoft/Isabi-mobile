import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaydemoPage } from './playdemo.page';
import { CountdownTimerComponent } from 'src/app/components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';

const routes: Routes = [
  {
    path: '',
    component: PlaydemoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlaydemoPage, CountdownTimerComponent, ClueTipsComponent]
})
export class PlaydemoPageModule {}
