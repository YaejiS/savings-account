import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkBankAccountComponent } from './components/registration/link-bank-account/link-bank-account.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { InvitePeopleComponent } from './components/registration/invite-people/invite-people.component';
import { SetGoalComponent } from './components/registration/set-goal/set-goal.component';
import { SetGoalComponent2 } from './components/registration/set-goal-2/set-goal-2.component';
import { StatusComponent } from './components/registration/status/status.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'link-account', component: LinkBankAccountComponent },
  { path: 'invite-people', component: InvitePeopleComponent },
  { path: 'set-goal', component: SetGoalComponent },
  { path: 'set-goal-2', component: SetGoalComponent2},
  { path: 'status', component: StatusComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
