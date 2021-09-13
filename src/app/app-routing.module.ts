import { GameGuard } from './auth/game.guard';
import { NotLiveComponent } from './components/not-live/not-live.component';
import { GamesectionComponent } from './components/gamesection/gamesection.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InsideEventComponent } from './components/inside-event/inside-event.component';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { MerchantGuard } from './merchant.guard';
import { AdminnavigationComponent } from './adminnavigation/adminnavigation.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { AdminGuard } from './auth/admin.guard';
import { AccountComponent } from './components/account/account.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/gamesection',
    pathMatch: 'full'
  },

  {
    path: 'tabs', component: TabsComponent,
    children: [
      {
        path: 'gamesection',
        component: GamesectionComponent, canActivate: [AuthguardGuard, GameGuard]
      },
      {
        path: 'game-not-live',
        component: NotLiveComponent, canActivate: [AuthguardGuard]
      },

      {
        path: 'not-live', component: NotLiveComponent, canActivate: [AuthguardGuard]
      },

      {
        path: 'events', loadChildren: './events/events.module#EventsPageModule',
        canActivate: [AuthguardGuard]
      },

      {
        path: 'admin-event', component: AdminEventComponent,
        canActivate: [AuthguardGuard, AdminGuard]
      },

      {
        path: 'leaderboard',
        loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule',
        canActivate: [AuthguardGuard]
      },
      {
        path: 'account', component: AccountComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'playdemo',
        loadChildren: './playdemo/playdemo.module#PlaydemoPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'myrecord',
        loadChildren: './myrecord/myrecord.module#MyrecordPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'playsection',
        loadChildren: './playsection/playsection.module#PlaysectionPageModule',
        canActivate: [AuthguardGuard, GameGuard]
      },

      {
        path: 'transaction',
        loadChildren: './transaction/transaction.module#TransactionPageModule',
        canActivate: [AuthguardGuard]
      },


      //  admin routes
      {
        path: 'admin-upload',
        loadChildren: './admin-upload/admin-upload.module#AdminUploadPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'manage-users',
        loadChildren: './manage-users/manage-users.module#ManageUsersPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'manage-questions',
        loadChildren: './manage-questions/manage-questions.module#ManageQuestionsPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'payouts',
        loadChildren: './payouts/payouts.module#PayoutsPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admin-account',
        loadChildren: './admin-account/admin-account.module#AdminAccountPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'adminquery', loadChildren: './adminquery/adminquery.module#AdminqueryPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admintransfer', loadChildren: './admintransfer/admintransfer.module#AdmintransferPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admin-play',
        loadChildren: './admin-play/admin-play.module#AdminPlayPageModule', canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'merchant',
        loadChildren: './merchant/merchant.module#MerchantPageModule', canActivate: [AuthguardGuard, MerchantGuard]
      },

      {
        path: 'cashout-request',
        loadChildren: './cashout-request/cashout-request.module#CashoutRequestPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'inside-event/:id', component: InsideEventComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'admin-leaderbord', loadChildren: './admin-leaderbord/admin-leaderbord.module#AdminLeaderbordPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
    ]
  },








  { path: 'howtoplay', loadChildren: './howtoplay/howtoplay.module#HowtoplayPageModule' },
  { path: 'admin-navigation', component: AdminnavigationComponent },


  {
    path: 'testimonials',
    loadChildren: './testimonials/testimonials.module#TestimonialsPageModule'
  },
  {
    path: 'contactus',
    loadChildren: './contactus/contactus.module#ContactusPageModule'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword', component: ForgetpasswordComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
