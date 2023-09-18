import Workout from './Workout';
import {describe, it, expect} from '@jest/globals';

const date = new Date('25/12/2023');

describe('Workout tests', () => {
  it('will construct the workout correctly', () => {
    const workout = new Workout(date);

    expect(workout.date).toEqual(date);
    expect(workout.exercises).toEqual([]);
  });
});
