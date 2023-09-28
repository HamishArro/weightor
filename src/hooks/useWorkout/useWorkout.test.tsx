import useWorkout, {Errors} from './useWorkout';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {
  RenderHookResult,
  renderHook,
  waitFor,
} from '@testing-library/react-native';
import {Cardio, Weight} from './types';

let hook: RenderHookResult<ReturnType<typeof useWorkout>, unknown>;

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
    hook = renderHook(useWorkout);
  });

  it('will construct the workout correctly', () => {
    expect(hook.result.current.exercises).toEqual([]);
  });

  it('will create a workout with both weight and cardio exercises', async () => {
    hook.result.current.addCardioExercise(cardioExercise);

    await waitFor(() =>
      expect(hook.result.current.exercises).toEqual([cardioExercise]),
    );

    hook.result.current.addWeightExercise(weightExercise);

    await waitFor(() =>
      expect(hook.result.current.exercises).toEqual([
        cardioExercise,
        weightExercise,
      ]),
    );
  });

  describe('weight', () => {
    it('will add a weight exercise correctly', async () => {
      hook.result.current.addWeightExercise(weightExercise);

      await waitFor(() =>
        expect(hook.result.current.exercises).toEqual([weightExercise]),
      );
    });

    describe('errors', () => {
      it('will throw and error when name is undefined', () => {
        expect(() =>
          hook.result.current.addWeightExercise({...weightExercise, name: ''}),
        ).toThrowError(Errors.NAME_UNDEFINED);
      });

      it('will throw and error when the input is lower than the limit (weight)', () => {
        expect(() =>
          hook.result.current.addWeightExercise({
            ...weightExercise,
            workoutEffort: -10,
          }),
        ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
      });

      it('will throw and error when the input is higher than the limit (weight)', () => {
        expect(() =>
          hook.result.current.addWeightExercise({
            ...weightExercise,
            workoutEffort: 1000,
          }),
        ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
      });

      it('will throw and error when no muscles are provided', () => {
        expect(() =>
          hook.result.current.addWeightExercise({
            ...weightExercise,
            musclesUsed: [],
          }),
        ).toThrowError(Errors.MUSCLES_USED_EMPTY);
      });

      it('will throw and error sets length is 0', () => {
        expect(() =>
          hook.result.current.addWeightExercise({
            ...weightExercise,
            sets: [],
          }),
        ).toThrowError(Errors.SETS_EMPTY);
      });
    });
  });

  describe('cardio', () => {
    it('will add a cardio exercise correctly', async () => {
      hook.result.current.addCardioExercise(cardioExercise);

      await waitFor(() =>
        expect(hook.result.current.exercises).toEqual([cardioExercise]),
      );
    });

    describe('errors', () => {
      it('will throw and error when name is undefined', () => {
        expect(() =>
          hook.result.current.addCardioExercise({
            ...cardioExercise,
            name: '',
          }),
        ).toThrowError(Errors.NAME_UNDEFINED);
      });

      it('will throw and error when the input is lower than the limit', () => {
        expect(() =>
          hook.result.current.addCardioExercise({
            ...cardioExercise,
            workoutEffort: -10,
          }),
        ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
      });

      it('will throw and error when the input is higher than the limit', () => {
        expect(() =>
          hook.result.current.addCardioExercise({
            ...cardioExercise,
            workoutEffort: 1000,
          }),
        ).toThrowError(Errors.WORKOUT_EFFORT_RANGE);
      });

      it('will throw and error when no muscles are provided', () => {
        expect(() =>
          hook.result.current.addCardioExercise({
            ...cardioExercise,
            musclesUsed: [],
          }),
        ).toThrowError(Errors.MUSCLES_USED_EMPTY);
      });

      it('will throw and error when duration is 0', () => {
        expect(() =>
          hook.result.current.addCardioExercise({
            ...cardioExercise,
            duration: 0,
          }),
        ).toThrowError(Errors.DURATION_RANGE);
      });
    });
  });
});
