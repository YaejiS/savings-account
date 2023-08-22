import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  /**
   * Updates registration page to corresponding steps in the process 
   * based on the tab clicked
   */
  updatePage( updatePageEvent: EventEmitter<string>, endpoint : string ) {
    updatePageEvent.emit(endpoint);
  }
}
