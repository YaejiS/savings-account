import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGoalComponent2 } from './set-goal-2.component';

describe('SetGoalComponent', () => {
  let component: SetGoalComponent2;
  let fixture: ComponentFixture<SetGoalComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetGoalComponent2]
    });
    fixture = TestBed.createComponent(SetGoalComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
