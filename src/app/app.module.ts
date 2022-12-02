import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy.page';
import { DemoQuestionsService } from './shared/demo-questions.service';
import { FailGameComponent } from './components/fail-game/fail-game.component';
import { CongratsComponent } from './components/congrats/congrats.component';
import { GameGuard } from './auth/game.guard';
import { NotLiveComponent } from './pages/not-live/not-live.component';
import { GamesectionComponent } from './pages/gamesection/gamesection.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VoteNowComponent } from './components/vote-now/vote-now.component';
import { InsideEventAddUserComponent } from './components/inside-event-add-user/inside-event-add-user.component';
import { InsideEventComponent } from './components/inside-event/inside-event.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminEventComponent } from './components/admin-event/admin-event.component';
import { EventService } from './shared/event.service';
import { MerchantGuard } from './merchant.guard';
import { AdminnavigationComponent } from './components/adminnavigation/adminnavigation.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { AdminGuard } from './auth/admin.guard';
import { AccountComponent } from './pages/account/account.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { Facebook , FacebookOriginal} from '@ionic-native/facebook';
// import {MatIconModule} from '@angular/material/icon';

import { SplashComponent } from './components/splash/splash.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { environment } from 'src/environments/environment';
// import { Socket } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'https://i-sabi.herokuapp.com/api:8000', options: {} };
// const config: SocketIoConfig = { 
//   url: 'http://localhost:8000',
//   options: {} };



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';
import { AuthguardGuard } from './auth/authguard.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AccountService } from './shared/account.service';
import { GameServiceService } from './shared/game-service.service';
import { GamePipe } from './game.pipe';
import { AngularFireModule } from '@angular/fire';
import { SafeResourceUrlPipe } from './pipes/safe-url.pipe';
import { LogicService } from './services/logic.service';
import { BehavourService } from './services/behavour.service';
import { WebVotingComponent } from './pages/web-voting/web-voting.component';
import { environment } from 'src/environments/environment';
import { ImageCustomSpinnerComponent } from './components/image-custom-spinner/image-custom-spinner.component';
import { FirebaseService } from './services/firebase.service';
import { InsideTicketingComponent } from './components/inside-ticketing/inside-ticketing.component';
import { InsideTicketAddTicketComponent } from './components/inside-ticket-add-ticket/inside-ticket-add-ticket.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { WebTicketComponent } from './pages/web-ticket/web-ticket.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { TransactionService } from './services/transaction.service';
import { NgInterswitchModule } from '@interswitchapi/ng-interswitch';
import { MinutesToSecondsPipe } from './pipes/minutes-to-seconds.pipe';

const config: SocketIoConfig = { url: environment.socketsUrl, options: {
  path: "/live/",
  query: {id: "id"}
} };


@NgModule({
  declarations: [
    AccountComponent,
    AdminEventComponent, 
    AdminnavigationComponent, 
    AppComponent, 
    GamePipe, 
    HeaderComponent,
    BuyTicketComponent,
    CongratsComponent, 
    EditEventComponent,
    FailGameComponent, 
    ForgetpasswordComponent,
    InsideEventComponent,
    InsideEventAddUserComponent, 
    VoteNowComponent, 
    TabsComponent, 
    GamesectionComponent, 
    NotLiveComponent,
    WebVotingComponent,
    ImageCustomSpinnerComponent,
    InsideTicketingComponent,
    InsideTicketAddTicketComponent,
    TicketItemComponent,
    WebTicketComponent,
    SafeResourceUrlPipe, 
    PrivacyPolicyPage,
    SplashComponent,
    MinutesToSecondsPipe,
  ],
  entryComponents: [InsideEventAddUserComponent, VoteNowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgInterswitchModule,
    HttpClientModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(config),
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
    TransactionService,
    // AppRate,
    UserService,
    LogicService,
    BehavourService,
    SplashScreen,
    FirebaseService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    UserService, AccountService, AdminGuard,
     AuthguardGuard, GameServiceService, MerchantGuard, GameGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
 