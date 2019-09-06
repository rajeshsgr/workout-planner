import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-planned-workout-list',
  templateUrl: './planned-workout-list.component.html',
  styleUrls: ['./planned-workout-list.component.css']
})
export class PlannedWorkoutListComponent implements OnInit {

  plannedWorkoutList = [];

  constructor(private workoutSvc: WorkoutService) {


    this.plannedWorkoutList=workoutSvc.plannedList
    //workoutSvc.plannedList = this.plannedWorkoutList;
  }

  ngOnInit() {
  }

  markCompleted(index: number) {

    this.workoutSvc.addToCompletedList(index);
  }



}
