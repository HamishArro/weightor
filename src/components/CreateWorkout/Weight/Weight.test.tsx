import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import Weight from './Weight';

const props = {
  handleAdd: jest.fn(),
  handleBack: jest.fn(),
};

const weightExercise = {
  name: 'weight',
  musclesUsed: ['arms'],
  workoutEffort: 50,
  sets: [{reps: 12, weight: 20, rest: 60}],
};

describe('add tests', () => {
  beforeEach(() => {
    render(<Weight {...props} />);
  });

  it('will call handle back when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('back-button')));

    expect(props.handleBack).toHaveBeenCalled();
  });

  it('can submit a form correctly', () => {
    act(() => {
      fireEvent.changeText(
        screen.getByTestId('name-input'),
        weightExercise.name,
      );
      fireEvent.changeText(
        screen.getByTestId('muscles-used-input'),
        weightExercise.musclesUsed.join(','),
      );
      fireEvent.changeText(
        screen.getByTestId('workout-effort-input'),
        JSON.stringify(weightExercise.workoutEffort),
      );
      weightExercise.sets.forEach(({reps, weight, rest}) => {
        fireEvent.changeText(
          screen.getByTestId('reps-input'),
          JSON.stringify(reps),
        );
        fireEvent.changeText(
          screen.getByTestId('weight-input'),
          JSON.stringify(weight),
        );
        fireEvent.changeText(
          screen.getByTestId('rest-input'),
          JSON.stringify(rest),
        );
      });
    });

    act(() => fireEvent.press(screen.getByTestId('save-button')));

    act(() => fireEvent.press(screen.getByTestId('add-button')));

    expect(props.handleAdd).toHaveBeenCalledWith(weightExercise);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
