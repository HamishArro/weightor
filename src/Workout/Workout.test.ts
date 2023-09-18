import Workout, {Errors} from './Workout';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {Cardio, Weight, WorkoutInterface} from './Workout.types';

let workout: WorkoutInterface;

const date = new Date('25/12/2023');
const weightExercise: Weight = {
  name: 'weight',
  musclesUsed: ['chest'],
  workoutEffort: 50,
  sets: [{reps: 12, weight: 20, rest: 60}],
};
const cardioExercise: Cardio = {
  name: 'cardio',
  musclesUsed: ['legs'],
  workoutEffort: 50,
  duration: 300,
};

describe('Workout tests', () => {
  beforeEach(() => {
    workout = new Workout(date);
  });

  it('will construct the workout correctly', () => {
    expect(workout.date).toEqual(date);
    expect(workout.exercises).toEqual([]);
  });

  describe('weight', () => {
    it('will add a weight exercise correctly', () => {
      workout.addWeightExercise(
        weightExercise.name,
        weightExercise.musclesUsed,
        weightExercise.workoutEffort,
        weightExercise.sets,
      );

      expect(workout.exercises).toEqual([weightExercise]);
    });

    it('will throw and error when name is undefined', () => {
      expect(() =>
        workout.addWeightExercise(
          '',
          cardioExercise.musclesUsed,
          cardioExercise.workoutEffort,
          weightExercise.sets,
        ),
      ).toThrowError(Errors.NAME_UNDEFINED);
    });

    it('will throw and error when the input is lower than the limit (weight)', () => {
      expect(() =>
        workout.addWeightExercise(
          weightExercise.name,
          weightExercise.musclesUsed,
          -10,
          weightExercise.sets,
        ),
      ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
    });

    it('will throw and error when the input is higher than the limit (weight)', () => {
      expect(() =>
        workout.addWeightExercise(
          weightExercise.name,
          weightExercise.musclesUsed,
          1000,
          weightExercise.sets,
        ),
      ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
    });

    it('will throw and error when no muscles are provided', () => {
      expect(() =>
        workout.addWeightExercise(
          cardioExercise.name,
          [],
          cardioExercise.workoutEffort,
          weightExercise.sets,
        ),
      ).toThrowError(Errors.MUSCLES_USED_EMPTY);
    });
  });

  describe('cardio', () => {
    it('will add a cardio exercise correctly', () => {
      workout.addCardioExercise(
        cardioExercise.name,
        cardioExercise.musclesUsed,
        cardioExercise.workoutEffort,
        cardioExercise.duration,
      );

      expect(workout.exercises).toEqual([cardioExercise]);
    });

    it('will throw and error when name is undefined', () => {
      expect(() =>
        workout.addCardioExercise(
          '',
          cardioExercise.musclesUsed,
          cardioExercise.workoutEffort,
          cardioExercise.duration,
        ),
      ).toThrowError(Errors.NAME_UNDEFINED);
    });

    it('will throw and error when the input is lower than the limit', () => {
      expect(() =>
        workout.addCardioExercise(
          cardioExercise.name,
          cardioExercise.musclesUsed,
          -10,
          cardioExercise.duration,
        ),
      ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
    });

    it('will throw and error when the input is higher than the limit', () => {
      expect(() =>
        workout.addCardioExercise(
          cardioExercise.name,
          cardioExercise.musclesUsed,
          1000,
          cardioExercise.duration,
        ),
      ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
    });

    it('will throw and error when no muscles are provided', () => {
      expect(() =>
        workout.addCardioExercise(
          cardioExercise.name,
          [],
          cardioExercise.workoutEffort,
          cardioExercise.duration,
        ),
      ).toThrowError(Errors.MUSCLES_USED_EMPTY);
    });
  });
});
