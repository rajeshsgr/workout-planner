import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { 


  }

  plannedList=["PushUp", "Pullup", "Bicep Curl"];

  completedList=["Bench Press"];

  addToPlannedList(id: number){

    this.plannedList.push(this.completedList[id]);
    this.completedList.splice(id,1);

  };

  addToCompletedList(id: number){

    this.completedList.push(this.plannedList[id]);
    this.plannedList.splice(id,1);

  };


}
