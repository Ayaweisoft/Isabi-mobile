import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { PlaydemoPage } from './playdemo.page';
import { CountdownTimerComponent } from 'src/app/components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';
import { ScoreCounterComponent } from 'src/app/components/score-counter/score-counter.component';

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
  declarations: [PlaydemoPage, CountdownTimerComponent, ClueTipsComponent, ScoreCounterComponent, LoadingSpinnerComponent]
})
export class PlaydemoPageModule {}
