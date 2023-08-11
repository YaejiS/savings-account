import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePeopleComponent } from './invite-people.component';

describe('InvitePeopleComponent', () => {
  let component: InvitePeopleComponent;
  let fixture: ComponentFixture<InvitePeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitePeopleComponent]
    });
    fixture = TestBed.createComponent(InvitePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
