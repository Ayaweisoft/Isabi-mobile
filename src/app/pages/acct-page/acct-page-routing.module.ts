import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcctPagePage } from './acct-page.page';

const routes: Routes = [
  {
    path: '',
    component: AcctPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcctPagePageRoutingModule {}
