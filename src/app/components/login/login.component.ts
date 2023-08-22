import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  @ViewChild("passwordInput") passwordInput : any;
  
  maskedPassword: string = '';
  passwordValue: string = "";

  listener(event: any) {
    this.passwordValue = this.passwordInput.nativeElement.value;

    this.maskedPassword = this.passwordMask(this.passwordValue);
  }

  passwordMask(password: string) {

    let stupid = ''
    for (let i = 0; i < password.length - 1; i++) {
      stupid += '*'
    }
    return stupid + password[password.length-1]
  }

}
