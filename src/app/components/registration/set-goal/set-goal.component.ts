import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-set-goal',
  templateUrl: './set-goal.component.html',
  styleUrls: ['./set-goal.component.css'],
})
export class SetGoalComponent {

  @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private dialog: MatDialog ) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Confirmation, {
      width: '250px'
    });
  }


}

@Component({
  selector: 'confirmation',
  templateUrl: 'confirmation.html',
})
export class Confirmation {

  constructor(private dialogRef: MatDialogRef<Confirmation>) {}

  closeDialog() {
    this.dialogRef.close(true);
  }
}
