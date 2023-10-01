import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import Display from './Display';

const cardioExercise = {
  name: 'cardio',
  musclesUsed: ['legs'],
  workoutEffort: 50,
  duration: 300,
};

const props = {
  exercises: [cardioExercise],
  handleAdd: jest.fn(),
  addButtonText: 'Add',
};

describe('display tests', () => {
  beforeEach(() => {
    render(<Display {...props} />);
  });

  it('calls add handler when button is pressed', () => {
    act(() => fireEvent.press(screen.getByTestId('add-button')));

    expect(props.handleAdd).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
