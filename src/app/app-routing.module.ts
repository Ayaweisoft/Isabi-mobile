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
import { WebTicketComponent } from './pages/web-ticket/web-ticket.component';
import { OnboardEventPage } from './pages/onboard-event/onboard-event.page';
import { LeaderboardPage } from './pages/leaderboard/leaderboard.page';


const routes: Routes = [
  // --- 1. DEFAULT ROUTE: Redirects to Onboarding for First-time setup ---
  {
    path: '',
    redirectTo: 'onboarding', 
    pathMatch: 'full'
  },
  {
    path: 'onboarding', 
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  // --- END DEFAULT ROUTE ---

  {
    path: 'tabs', component: TabsComponent,
    children: [
    {
      path: 'events', loadChildren: './pages/events/events.module#EventsPageModule',
      canActivate: [AuthguardGuard]
    },
    {
      path: 'utility', loadChildren: './pages/utility/utility.module#UtilityPageModule',
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
      path: 'onboard-event',
      loadChildren: './pages/onboard-event/onboard-event.module#OnboardEventPageModule',
      // canActivate: [AuthguardGuard]
    },
    {
      path: 'account', component: AccountComponent, canActivate: [AuthguardGuard]
    },
    {
      path: 'account-details',
      loadChildren: () => import('./pages/account-details/account-details.module').then( m => m.AccountDetailsPageModule)
    },
    {
      path: 'accounts',
      loadChildren: () => import('./pages/account-new/account-new.module').then( m => m.AccountNewPageModule)
    },

    // {
    //   path: 'manage-event', component: ManageEventComponent,
    //   canActivate: [AuthguardGuard, AdminGuard]
    // },

    {
      path: 'manage-event',
      loadChildren: () => import('./pages/manage-event/manage-event.module').then( m => m.ManageEventPageModule),
      canActivate: [AuthguardGuard, AdminGuard]
    },

    {
      path: 'accounts',
      loadChildren: () => import('./pages/account-new/account-new.module').then( m => m.AccountNewPageModule)
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
      canActivate: [AuthguardGuard]
    },
    {
      path: 'network',
      loadChildren: () => import('./pages/network/network.module').then( m => m.NetworkPageModule)
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
    {
      path: 'faq',
      loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
    },
  ]},
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'register/:id',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'confirm-email',
    loadChildren: () => import('./pages/confirm-email/confirm-email.module').then( m => m.ConfirmEmailPageModule)
  },
  {
    path: 'confirm-email/:id',
    loadChildren: () => import('./pages/confirm-email/confirm-email.module').then( m => m.ConfirmEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgetpassword', component: ForgetpasswordComponent
  },
  {
    path: 'reset/:token', component: ForgetpasswordComponent
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/coming-soon/coming-soon.module').then( m => m.ComingSoonPageModule)
  },
  { path: "*", redirectTo: 'tabs/events' },
  {
    path: '**',
    loadChildren: () => import('./pages/error-page/error-page.module').then( m => m.ErrorPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }