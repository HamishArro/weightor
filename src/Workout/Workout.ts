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

import {WorkoutInterface, Cardio, Weight, Set} from './Workout.types';

const WORKOUT_EFFORT_MAX_LIMIT = 100;
const WORKOUT_EFFORT_LOWER_LIMIT = 0;

export const Errors = {
  WORKOUT_EFFORT_RANGE: `Invalid workout effort, value must be more than ${WORKOUT_EFFORT_LOWER_LIMIT} and less than ${WORKOUT_EFFORT_MAX_LIMIT}`,
  MUSCLES_USED_EMPTY: 'Empty muscles value used',
  NAME_UNDEFINED: 'Undefined name value',
  SETS_EMPTY: 'Empty sets value used',
};

class Workout implements WorkoutInterface {
  public date: Date;
  public exercises: Array<Cardio | Weight>;

  constructor(date: Date) {
    this.date = date;
    this.exercises = [];
  }

  private validateWorkoutEffort(workoutEffort: number) {
    if (
      workoutEffort < WORKOUT_EFFORT_LOWER_LIMIT ||
      workoutEffort > WORKOUT_EFFORT_MAX_LIMIT
    )
      throw new Error(Errors.WORKOUT_EFFORT_RANGE);
  }

  private validateMusclesUsed(musclesUsed: string[]) {
    if (!musclesUsed.length) throw new Error(Errors.MUSCLES_USED_EMPTY);
  }

  private validateName(name: string) {
    if (!name) throw new Error(Errors.NAME_UNDEFINED);
  }

  public addWeightExercise(
    name: string,
    musclesUsed: string[],
    workoutEffort: number,
    sets: Set[],
  ) {
    this.validateName(name);
    this.validateMusclesUsed(musclesUsed);
    this.validateWorkoutEffort(workoutEffort);

    this.exercises.push({name, musclesUsed, workoutEffort, sets});
  }

  public addCardioExercise(
    name: string,
    musclesUsed: string[],
    workoutEffort: number,
    duration: number,
  ) {
    this.validateName(name);
    this.validateMusclesUsed(musclesUsed);
    this.validateWorkoutEffort(workoutEffort);

    this.exercises.push({name, musclesUsed, workoutEffort, duration});
  }
}

export default Workout;
