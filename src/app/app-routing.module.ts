import { PrivacyPolicyPageModule } from './pages/privacy-policy/privacy-policy.module';
import { RegisterPage } from './pages/register/register.page';
import { GameGuard } from './auth/game.guard';
import { NotLiveComponent } from './pages/not-live/not-live.component';
import { GamesectionComponent } from './pages/gamesection/gamesection.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InsideEventComponent } from './components/inside-event/inside-event.component';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { MerchantGuard } from './merchant.guard';
import { AdminnavigationComponent } from './components/adminnavigation/adminnavigation.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { AdminGuard } from './auth/admin.guard';
import { AccountComponent } from './pages/account/account.component';
import { AuthguardGuard } from './auth/authguard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { WebVotingComponent } from './pages/web-voting/web-voting.component';
import { InsideTicketingComponent } from './components/inside-ticketing/inside-ticketing.component';
import { ManageEventComponent } from './components/manage-event/manage-event.component';
import { WebTicketComponent } from './pages/web-ticket/web-ticket.component';
import { LeaderboardPage } from './pages/leaderboard/leaderboard.page';

const routes2: Routes = [
  {
    path: '',
    redirectTo: 'tabs/events',
    pathMatch: 'full'
  },

  {
    path: 'tabs', component: TabsComponent,
    children: [
      {
        path: 'gamesection',
        component: GamesectionComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'game-not-live',
        component: NotLiveComponent, canActivate: [AuthguardGuard]
      },

      {
        path: 'not-live', component: NotLiveComponent, canActivate: [AuthguardGuard]
      },

      {
        path: 'events', loadChildren: './pages/events/events.module#EventsPageModule',
        canActivate: [AuthguardGuard]
      },
      {
        path: 'manage-event', component: ManageEventComponent,
        canActivate: [AuthguardGuard, AdminGuard]
      },

      {
        path: 'admin-event', component: AdminEventComponent,
        canActivate: [AuthguardGuard, AdminGuard]
      },

      {
        path: 'leaderboard',
        loadChildren: './pages//leaderboard/leaderboard.module#LeaderboardPageModule',
        canActivate: [AuthguardGuard]
      },
      {
        path: 'account', component: AccountComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'playdemo',
        loadChildren: './pages/playdemo/playdemo.module#PlaydemoPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'myrecord',
        loadChildren: './pages/myrecord/myrecord.module#MyrecordPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'playsection',
        loadChildren: './pages/playsection/playsection.module#PlaysectionPageModule',
        canActivate: [AuthguardGuard, GameGuard]
      },

      {
        path: 'transaction',
        loadChildren: './pages/transaction/transaction.module#TransactionPageModule',
        canActivate: [AuthguardGuard]
      },

      //  admin routes
      {
        path: 'admin-upload',
        loadChildren: './pages/admin-upload/admin-upload.module#AdminUploadPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'manage-users',
        loadChildren: './pages/manage-users/manage-users.module#ManageUsersPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'manage-questions',
        loadChildren: './pages/manage-questions/manage-questions.module#ManageQuestionsPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'payouts',
        loadChildren: './pages/payouts/payouts.module#PayoutsPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admin-account',
        loadChildren: './pages/admin-account/admin-account.module#AdminAccountPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'adminquery', loadChildren: './pages/adminquery/adminquery.module#AdminqueryPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admintransfer', loadChildren: './pages/admintransfer/admintransfer.module#AdmintransferPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'admin-play',
        loadChildren: './pages/admin-play/admin-play.module#AdminPlayPageModule', canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'merchant',
        loadChildren: './pages/merchant/merchant.module#MerchantPageModule', canActivate: [AuthguardGuard, MerchantGuard]
      },

      {
        path: 'cashout-request',
        loadChildren: './pages/cashout-request/cashout-request.module#CashoutRequestPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
      {
        path: 'inside-event/:id', component: InsideEventComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'inside-ticketing/:id', component: InsideTicketingComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'admin-leaderbord', loadChildren: './pages/admin-leaderbord/admin-leaderbord.module#AdminLeaderbordPageModule',
        canActivate: [AuthguardGuard, AdminGuard]
      },
    ]
  },
// Outer Routes
  { path: 'howtoplay', loadChildren: './pages/howtoplay/howtoplay.module#HowtoplayPageModule' },
  { path: 'admin-navigation', component: AdminnavigationComponent },


  {
    path: 'testimonials',
    loadChildren: './pages/testimonials/testimonials.module#TestimonialsPageModule'
  },
  {
    path: 'contactus',
    loadChildren: './pages/contactus/contactus.module#ContactusPageModule'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword', component: ForgetpasswordComponent
  },
  {
    
    path: 'web-voting/:id', component: WebVotingComponent
  },
  {
    
    path: 'web-event-ticket/:id', component: WebTicketComponent
  },


];
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/events',
    pathMatch: 'full'
  },

  {
    path: 'tabs', component: TabsComponent,
    children: [
     
      {
        path: 'events', loadChildren: './pages//events/events.module#EventsPageModule',
        canActivate: [AuthguardGuard]
      },
      

      {
        path: 'gamesection',
        component: GamesectionComponent, canActivate: [AuthguardGuard, GameGuard]
      },
      {
        path: 'game-not-live',
        component: NotLiveComponent, canActivate: [AuthguardGuard]
      },
      {
        path: 'playdemo',
        loadChildren: './pages/playdemo/playdemo.module#PlaydemoPageModule', canActivate: [AuthguardGuard]
      },

  
      {
        path: 'not-live', component: NotLiveComponent, canActivate: [AuthguardGuard]
      },
      
      {
        path: 'leaderboard',
        loadChildren: './pages/leaderboard/leaderboard.module#LeaderboardPageModule',
        
      },
      {
        path: 'account', component: AccountComponent, canActivate: [AuthguardGuard]
      },
   

      {
        path: 'manage-event', component: ManageEventComponent,
        canActivate: [AuthguardGuard, AdminGuard]
      },
  
      {
        path: 'admin-event', component: AdminEventComponent,
        canActivate: [AuthguardGuard, AdminGuard]
      },
  
     
      {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'settings',
        loadChildren: './pages/settings/settings.module#SettingsPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'privacy-policy',
        loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', canActivate: [AuthguardGuard]
      },
      {
        path: 'myrecord',
        loadChildren: './pages/myrecord/myrecord.module#MyrecordPageModule', canActivate: [AuthguardGuard]
      },
      
 
    {
      path: 'playsection',
      loadChildren: './pages/playsection/playsection.module#PlaysectionPageModule',
      canActivate: [AuthguardGuard, GameGuard]
    },

    {
      path: 'transaction',
      loadChildren: './pages/transaction/transaction.module#TransactionPageModule',
      canActivate: [AuthguardGuard]
    },

    //  admin routes
    {
      path: 'admin-upload',
      loadChildren: './pages/admin-upload/admin-upload.module#AdminUploadPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'manage-users',
      loadChildren: './pages/manage-users/manage-users.module#ManageUsersPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'manage-questions',
      loadChildren: './pages/manage-questions/manage-questions.module#ManageQuestionsPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'payouts',
      loadChildren: './pages/payouts/payouts.module#PayoutsPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'admin-account',
      loadChildren: './pages/admin-account/admin-account.module#AdminAccountPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'adminquery', loadChildren: './pages/adminquery/adminquery.module#AdminqueryPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'admintransfer', loadChildren: './pages/admintransfer/admintransfer.module#AdmintransferPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'admin-play',
      loadChildren: './pages/admin-play/admin-play.module#AdminPlayPageModule', canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'merchant',
      loadChildren: './pages/merchant/merchant.module#MerchantPageModule', canActivate: [AuthguardGuard, MerchantGuard]
    },

    {
      path: 'cashout-request',
      loadChildren: './pages/cashout-request/cashout-request.module#CashoutRequestPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
    {
      path: 'inside-event/:id', component: InsideEventComponent, canActivate: [AuthguardGuard]
    },
    {
      path: 'inside-ticketing/:id', component: InsideTicketingComponent, canActivate: [AuthguardGuard]
    },
    {
      path: 'admin-leaderbord', loadChildren: './pages/admin-leaderbord/admin-leaderbord.module#AdminLeaderbordPageModule',
      canActivate: [AuthguardGuard, AdminGuard]
    },
  ]},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then( m => m.AccountsPageModule)
  },
    { path: "*", redirectTo: 'tabs/events' },
];

const routes3: Routes = [
  {
    path: '',
    redirectTo: 'tabs/events',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
