// workout
// date √
// exercises cardio and weight √

// allow user to set muscles used √
// add name for exercise √
// workout effort out of 100 √
//      need to add validation
// sets √
//  - reps √
//  - weight in kg √
//  - rest duration in seconds √

import {WorkoutInterface, Cardio, Weight} from './Workout.types';

class Workout implements WorkoutInterface {
  public date: Date;
  public exercises: Array<Cardio | Weight>;

  constructor(date: Date) {
    this.date = date;
    this.exercises = [];
  }
}

export default Workout;
