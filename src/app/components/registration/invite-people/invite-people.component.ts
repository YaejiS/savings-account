import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import {Observable, map, startWith} from 'rxjs';

@Component({
  selector: 'app-invite-people',
  templateUrl: './invite-people.component.html',
  styleUrls: ['./invite-people.component.css']
})
export class InvitePeopleComponent {
  
  myControl = new FormControl('');
  names: string[] = ['@Amy', '@Jared', '@Sally'];
  filteredNames: Observable<string[]> | undefined;

  @Output() updatePageEvent = new EventEmitter<string>();

  constructor( private service : RegistrationService ) {}

  updatePage( endpoint : string ) {
    this.service.updatePage( this.updatePageEvent, endpoint );
  }

  ngOnInit() {
    this.filteredNames = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.names.filter(name => name.toLowerCase().includes(filterValue));
  }

}
