import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import Add from './Add';

const props = {
  handleAdd: jest.fn(),
  handleBack: jest.fn(),
};

const cardioExercise = {
  name: 'cardio',
  musclesUsed: ['legs'],
  workoutEffort: 50,
  duration: 300,
};

describe('add tests', () => {
  beforeEach(() => {
    render(<Add {...props} />);
  });

  it('will call handle back when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('back-button')));

    expect(props.handleBack).toHaveBeenCalled();
  });

  it('can submit a form correctly', () => {
    act(() => {
      fireEvent.changeText(
        screen.getByTestId('name-input'),
        cardioExercise.name,
      );
      fireEvent.changeText(
        screen.getByTestId('muscles-used-input'),
        cardioExercise.musclesUsed.join(','),
      );
      fireEvent.changeText(
        screen.getByTestId('workout-effort-input'),
        JSON.stringify(cardioExercise.workoutEffort),
      );
      fireEvent.changeText(
        screen.getByTestId('duration-input'),
        JSON.stringify(cardioExercise.duration),
      );
    });

    act(() => fireEvent.press(screen.getByTestId('add-button')));

    expect(props.handleAdd).toHaveBeenCalledWith(cardioExercise);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
