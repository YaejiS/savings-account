import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';


@Component({
  selector: 'app-invite-people',
  templateUrl: './invite-people.component.html',
  styleUrls: ['./invite-people.component.css']
})
export class InvitePeopleComponent {

  @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private service : RegistrationService ) {}

  updatePage( endpoint : string ) {
    this.service.updatePage( this.updatePageEvent, endpoint );
  }

}
