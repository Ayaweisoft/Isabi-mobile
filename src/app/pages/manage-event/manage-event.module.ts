import { EventService } from './../../shared/event.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageEventPage } from './manage-event.page';
import { EventDetailsPage } from '../event-details/event-details.page';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';

const routes: Routes = [
  {
    path: '',
    component: ManageEventPage
  },
  {
    path: 'details/:id',
    component: EventDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageEventPage, EventDetailsPage, ProfilePhotoComponent]
})
export class ManageEventPageModule {}
