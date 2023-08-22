
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LinkBankAccountComponent } from './components/registration/link-bank-account/link-bank-account.component';
import { InvitePeopleComponent } from './components/registration/invite-people/invite-people.component';
import { SetGoalComponent } from './components/registration/set-goal/set-goal.component';
import { SetGoalComponent2 } from './components/registration/set-goal-2/set-goal-2.component';
import { StatusComponent } from './components/registration/status/status.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LinkBankAccountComponent,
    InvitePeopleComponent,
    SetGoalComponent,
    SetGoalComponent2,
    StatusComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
