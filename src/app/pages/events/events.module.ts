import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { EventsPage } from './events.page';

import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';
import {ProfilePhotoComponent} from '../../components/profile-photo/profile-photo.component'
// import { apiBaseUrl } from '../../environments/'
const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];
// const config: SocketIoConfig = { url: apiBaseUrl, options: {} };
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // SocketIoModule.forRoot(config)
  ],
  // declarations: [EventsPage, HeaderComponent, CountdownTimerComponent, ClueTipsComponent]
  declarations: [EventsPage, CountdownTimerComponent, ClueTipsComponent, SearchbarComponent, ProfilePhotoComponent]
})
export class EventsPageModule {}
   