import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { IonicModule } from '@ionic/angular';

import { LeaderboardPage } from './leaderboard.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaderboardPage, LoadingSpinnerComponent]
})
export class LeaderboardPageModule {}
