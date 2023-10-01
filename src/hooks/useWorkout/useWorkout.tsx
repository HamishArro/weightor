import {useState} from 'react';
import {WorkoutInterface, Cardio, Weight, Exercises} from './types';

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

function useWorkout() {
  const [exercises, setExercise] = useState<Exercises>([]);

  function validateWorkoutEffort(workoutEffort: number) {
    if (
      workoutEffort < WORKOUT_EFFORT_LOWER_LIMIT ||
      workoutEffort > WORKOUT_EFFORT_MAX_LIMIT
    ) {
      throw new Error(Errors.WORKOUT_EFFORT_RANGE);
    }
  }

  function validateMusclesUsed(musclesUsed: string[]) {
    if (!musclesUsed.length) {
      throw new Error(Errors.MUSCLES_USED_EMPTY);
    }
  }

  function validateName(name: string) {
    if (!name) {
      throw new Error(Errors.NAME_UNDEFINED);
    }
  }

  function addWeightExercise({name, musclesUsed, workoutEffort, sets}: Weight) {
    validateName(name);
    validateMusclesUsed(musclesUsed);
    validateWorkoutEffort(workoutEffort);
    if (!sets.length) {
      throw new Error(Errors.SETS_EMPTY);
    }

    setExercise([...exercises, {name, musclesUsed, workoutEffort, sets}]);
  }

  function addCardioExercise({
    name,
    musclesUsed,
    workoutEffort,
    duration,
  }: Cardio) {
    validateName(name);
    validateMusclesUsed(musclesUsed);
    validateWorkoutEffort(workoutEffort);
    if (duration <= 0) {
      throw new Error(Errors.DURATION_RANGE);
    }

    setExercise([...exercises, {name, musclesUsed, workoutEffort, duration}]);
  }

  return {exercises, addWeightExercise, addCardioExercise};
}

export default useWorkout;

export type {WorkoutInterface, Cardio, Weight, Exercises};
