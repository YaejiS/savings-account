import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkBankAccountComponent } from './components/registration/link-bank-account/link-bank-account.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { InvitePeopleComponent } from './components/registration/invite-people/invite-people.component';
import { SetGoalComponent } from './components/registration/set-goal/set-goal.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { SetGoalComponent2 } from './components/registration/set-goal-2/set-goal-2.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'link-account', component: LinkBankAccountComponent },
  { path: 'invite-people', component: InvitePeopleComponent },
  { path: 'set-goal', component: SetGoalComponent },
  { path: 'set-goal-2', component: SetGoalComponent2}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTabsModule, MatListModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatDialogModule, MatIconModule, MatDatepickerModule, MatNativeDateModule],
  exports: [RouterModule, MatTabsModule, MatListModule,MatFormFieldModule, MatInputModule, BrowserAnimationsModule, MatDialogModule, MatIconModule, MatDatepickerModule, MatNativeDateModule]
})
export class AppRoutingModule { }
