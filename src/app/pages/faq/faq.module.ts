import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaqPageRoutingModule } from './faq-routing.module';

import { FaqPage } from './faq.page';

import { EmptyComponentComponent } from 'src/app/components/empty-component/empty-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaqPageRoutingModule
  ],
  declarations: [FaqPage, EmptyComponentComponent]
})
export class FaqPageModule {}
