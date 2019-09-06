import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-completed-workout-list',
  templateUrl: './completed-workout-list.component.html',
  styleUrls: ['./completed-workout-list.component.css']
})
export class CompletedWorkoutListComponent implements OnInit {

  completedWorkoutList: string[];

  constructor(private workoutSvc: WorkoutService) { 

    this.completedWorkoutList=workoutSvc.completedList;

  }


  ngOnInit() {
  }

  markPlanned(index :number){

    this.workoutSvc.addToPlannedList(index);
 
  }

}
