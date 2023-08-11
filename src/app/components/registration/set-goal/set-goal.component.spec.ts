import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGoalComponent } from './set-goal.component';

describe('SetGoalComponent', () => {
  let component: SetGoalComponent;
  let fixture: ComponentFixture<SetGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetGoalComponent]
    });
    fixture = TestBed.createComponent(SetGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
