import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LinkBankAccountComponent } from './components/registration/link-bank-account/link-bank-account.component';
import { InvitePeopleComponent } from './components/registration/invite-people/invite-people.component';
import { SetGoalComponent } from './components/registration/set-goal/set-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LinkBankAccountComponent,
    InvitePeopleComponent,
    SetGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
