import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { UtilityBillsPage } from "./utility-bills.page";

const routes: Routes = [
  {
    path: "",
    component: UtilityBillsPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UtilityBillsPage],
})
export class UtilityBillsPageModule {}
