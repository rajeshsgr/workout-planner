import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkoutListComponent } from './completed-workout-list.component';

describe('CompletedWorkoutListComponent', () => {
  let component: CompletedWorkoutListComponent;
  let fixture: ComponentFixture<CompletedWorkoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWorkoutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
