import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkPageRoutingModule } from './network-routing.module';

import { NetworkPage } from './network.page';
import { ProfilePhotoComponent } from 'src/app/components/profile-photo/profile-photo.component';
import { LoadingSpinnerComponent } from 'src/app/components/loading-spinner/loading-spinner.component';
import { EmptyComponentComponent } from 'src/app/components/empty-component/empty-component.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [NetworkPage]
})
export class NetworkPageModule {}
