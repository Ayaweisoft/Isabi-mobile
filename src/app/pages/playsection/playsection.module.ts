import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlaysectionPage } from './playsection.page';
import { CountdownTimerComponent } from 'src/app/components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { ScoreCounterComponent } from 'src/app/components/score-counter/score-counter.component';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';

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
  declarations: [PlaysectionPage, ScoreCounterComponent, CountdownTimerComponent, ClueTipsComponent, LoadingSpinnerComponent, ProfilePhotoComponent]
})
export class PlaysectionPageModule {}
