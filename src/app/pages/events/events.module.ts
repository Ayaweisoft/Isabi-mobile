import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';

import { CountdownTimerComponent } from '../../components/countdown-timer/countdown-timer.component';
import { ClueTipsComponent } from '../../components/clue-tips/clue-tips.component';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    
  ],
  // declarations: [EventsPage, HeaderComponent, CountdownTimerComponent, ClueTipsComponent]
  declarations: [EventsPage, CountdownTimerComponent, ClueTipsComponent, SearchbarComponent]
})
export class EventsPageModule {}
   