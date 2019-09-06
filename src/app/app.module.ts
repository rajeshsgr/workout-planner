import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlannedWorkoutListComponent } from './planned-workout-list/planned-workout-list.component';
import { CompletedWorkoutListComponent } from './completed-workout-list/completed-workout-list.component';
import { WorkoutService } from './workout.service';

@NgModule({
  declarations: [
    AppComponent,
    PlannedWorkoutListComponent,
    CompletedWorkoutListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
