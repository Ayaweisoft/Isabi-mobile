import { DemoQuestionsService } from './shared/demo-questions.service';
import { FailGameComponent } from './components/fail-game/fail-game.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { GameGuard } from './auth/game.guard';
import { NotLiveComponent } from './components/not-live/not-live.component';
import { GamesectionComponent } from './components/gamesection/gamesection.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VoteNowComponent } from './components/vote-now/vote-now.component';
import { InsideEventAddUserComponent } from './components/inside-event-add-user/inside-event-add-user.component';
import { InsideEventComponent } from './components/inside-event/inside-event.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { EventService } from './shared/event.service';
import { MerchantGuard } from './merchant.guard';
import { AdminnavigationComponent } from './adminnavigation/adminnavigation.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { AdminGuard } from './auth/admin.guard';
import { AccountComponent } from './components/account/account.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { Facebook , FacebookOriginal} from '@ionic-native/facebook';
import { SplashComponent } from './splash/splash.component';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Angular4PaystackModule } from 'angular4-paystack';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';
import { AuthguardGuard } from './auth/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AccountService } from './shared/account.service';
import { GameServiceService } from './shared/game-service.service';
import { AngularRaveModule } from 'angular-rave';
import { GamePipe } from './game.pipe';
import { SafeResourceUrlPipe } from './pipes/safe-url.pipe';
import { LogicService } from './services/logic.service';


@NgModule({
  declarations: [AppComponent, GamePipe, AccountComponent,HeaderComponent,
    AdminnavigationComponent, AdminEventComponent, ForgetpasswordComponent,InsideEventComponent,
    InsideEventAddUserComponent, VoteNowComponent, TabsComponent, GamesectionComponent, NotLiveComponent,
     SafeResourceUrlPipe, CongratsComponent, FailGameComponent, SplashComponent],
  entryComponents: [InsideEventAddUserComponent, VoteNowComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Angular4PaystackModule,
    HttpClientModule,
    AngularRaveModule.forRoot({
      key: "FLWPUBK-b804fc96c1eb9fa18b814b41a86cfb45-X",
      isTest: true,
    }),
    IonicModule.forRoot(),
    AppRoutingModule,
    
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [{provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptor, multi: true},
    StatusBar,
    SplashScreen,
    StatusBar,
    EventService,
    DemoQuestionsService,
    // AppRate,
    UserService,
    LogicService,
    Angular4PaystackModule,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    UserService, AccountService, AdminGuard,
     AuthguardGuard, GameServiceService, MerchantGuard, GameGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 