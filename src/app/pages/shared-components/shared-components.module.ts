// shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { AboutPopupComponent } from 'src/app/components/about-popup/about-popup.component';
import { ScoreCounterComponent } from 'src/app/components/score-counter/score-counter.component';
import { EmptyComponentComponent } from 'src/app/components/empty-component/empty-component.component';
import { ClueTipsComponent } from 'src/app/components/clue-tips/clue-tips.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { CountdownTimerComponent } from 'src/app/components/countdown-timer/countdown-timer.component';
import { IonicModule } from '@ionic/angular';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AboutPopupComponent,
    ProfilePhotoComponent,
    ScoreCounterComponent,
    SearchbarComponent,
    EmptyComponentComponent,
    ClueTipsComponent,
    LoadingSpinnerComponent,
    CountdownTimerComponent,
  ], // Declare shared components
  imports: [
    IonicModule,
    CommonModule],
  exports: [
    AboutPopupComponent,
    ProfilePhotoComponent,
    ScoreCounterComponent,
    SearchbarComponent,
    EmptyComponentComponent,
    ClueTipsComponent,
    LoadingSpinnerComponent,
    CountdownTimerComponent,
  ],
})
export class SharedComponentsModule {}