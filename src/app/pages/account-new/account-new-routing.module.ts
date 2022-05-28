import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountNewPage } from './account-new.page';

const routes: Routes = [
  {
    path: '',
    component: AccountNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountNewPageRoutingModule {}
