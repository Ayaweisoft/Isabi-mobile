import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsideEventComponent } from './inside-event.component';

import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';

const routes: Routes = [
  {
    path: '',
    component: InsideEventComponent
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
  declarations: [SearchbarComponent]
})
export class SearchbarModule {}
   