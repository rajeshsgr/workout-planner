import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedWorkoutListComponent } from './planned-workout-list.component';

describe('PlannedWorkoutListComponent', () => {
  let component: PlannedWorkoutListComponent;
  let fixture: ComponentFixture<PlannedWorkoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedWorkoutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedWorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
