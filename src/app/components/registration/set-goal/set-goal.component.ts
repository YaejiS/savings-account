import { Component, EventEmitter, Output } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-set-goal',
  templateUrl: './set-goal.component.html',
  styleUrls: ['./set-goal.component.css'],
})
export class SetGoalComponent {

  @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private service : RegistrationService ) {}

  updatePage( endpoint : string ) {
    this.service.updatePage( this.updatePageEvent, endpoint );
  }
}
