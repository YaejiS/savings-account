import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-link-bank-account',
  templateUrl: './link-bank-account.component.html',
  styleUrls: ['./link-bank-account.component.css']
})
export class LinkBankAccountComponent {

  @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private service : RegistrationService ) {}

  updatePage( endpoint : string ) {
    this.service.updatePage( this.updatePageEvent, endpoint );
  }

}
