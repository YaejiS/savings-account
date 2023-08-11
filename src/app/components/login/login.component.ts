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
    // console.log(this.passwordInput.nativeElement.value)
    this.passwordValue = this.passwordInput.nativeElement.value;

    this.maskedPassword = this.passwordMask(this.passwordValue);

    // console.log(event.key)
    // if (event.key === 'Backspace') {
    //   this.passwordValue = this.passwordValue.substr(0,this.passwordValue.length-1)
    // } else if (event.key === 'Meta') {
    //   // do nothing
    // } else {
    //   this.passwordValue += event.key;
    // }
  }

  passwordMask(password: string) {
    // return password.substring(0, password.length - 1) + '*';
    // return password.substring(0, password.length - 1) + '*';
    // let mask = password.replaceAll(/./, '*');
    // return mask; // + password.substring(password.length - 1, password.length);
    let stupid = ''
    for (let i = 0; i < password.length - 1; i++) {
      stupid += '*'
    }
    return stupid + password[password.length-1]
  }

}
