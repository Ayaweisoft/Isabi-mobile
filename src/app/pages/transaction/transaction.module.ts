import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TransactionPage } from "./transaction.page";
import { ProfilePhotoComponent } from "../../components/profile-photo/profile-photo.component";
import { SharedComponentsModule } from "../shared-components/shared-components.module";

const routes: Routes = [
  {
    path: "",
    component: TransactionPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedComponentsModule,
  ],
  declarations: [TransactionPage],
})
export class TransactionPageModule {}
