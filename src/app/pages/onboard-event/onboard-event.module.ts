import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { IonicModule } from '@ionic/angular';

import { OnboardEventPage } from './onboard-event.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardEventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OnboardEventPage, LoadingSpinnerComponent, ProfilePhotoComponent]
})
export class OnboardEventPageModule {}