import { EventService } from '../../shared/event.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPage } from './event-details.page';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: EventDetailsPage
  // },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: []
})
export class EventDetailsPageModule {}
