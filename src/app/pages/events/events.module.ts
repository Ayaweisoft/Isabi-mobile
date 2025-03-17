import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { EventsPage } from './events.page';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
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
    SharedComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // SocketIoModule.forRoot(config)
  ],
  // declarations: [EventsPage, HeaderComponent, CountdownTimerComponent, ClueTipsComponent]
  declarations: [EventsPage]
})
export class EventsPageModule {}
   