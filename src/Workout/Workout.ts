import {WorkoutInterface, Cardio, Weight} from './Workout.d';

const WORKOUT_EFFORT_MAX_LIMIT = 100;
const WORKOUT_EFFORT_LOWER_LIMIT = 0;
const DURATION_LOWER_LIMIT = 0;

export const Errors = {
  WORKOUT_EFFORT_RANGE: `Invalid workout effort, value must be more than ${WORKOUT_EFFORT_LOWER_LIMIT} and less than ${WORKOUT_EFFORT_MAX_LIMIT}`,
  MUSCLES_USED_EMPTY: 'Empty muscles value used',
  NAME_UNDEFINED: 'Undefined name value',
  SETS_EMPTY: 'Empty sets value used',
  DURATION_RANGE: `Invalid duration, value must be more than ${DURATION_LOWER_LIMIT}`,
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

  public addWeightExercise({name, musclesUsed, workoutEffort, sets}: Weight) {
    this.validateName(name);
    this.validateMusclesUsed(musclesUsed);
    this.validateWorkoutEffort(workoutEffort);
    if (!sets.length) throw new Error(Errors.SETS_EMPTY);

    this.exercises.push({name, musclesUsed, workoutEffort, sets});
  }

  public addCardioExercise({
    name,
    musclesUsed,
    workoutEffort,
    duration,
  }: Cardio) {
    this.validateName(name);
    this.validateMusclesUsed(musclesUsed);
    this.validateWorkoutEffort(workoutEffort);
    if (duration <= 0) throw new Error(Errors.DURATION_RANGE);

    this.exercises.push({name, musclesUsed, workoutEffort, duration});
  }
}

export default Workout;
