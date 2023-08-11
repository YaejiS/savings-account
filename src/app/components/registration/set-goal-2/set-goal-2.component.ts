import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-set-goal-2',
  templateUrl: './set-goal-2.component.html',
  styleUrls: ['./set-goal-2.component.css'],
})
export class SetGoalComponent2 {

  // @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private dialog: MatDialog ) {}

}
