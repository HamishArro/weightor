import * as React from 'react';
import {describe, it, beforeEach} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import CreateWorkout from './CreateWorkout';

describe('create workout tests', () => {
  beforeEach(() => {
    render(<CreateWorkout />);
  });

  it('can create a workout successfully', () => {
    fireEvent.press(screen.getByTestId('create-button'));

    fireEvent.changeText(screen.getByTestId('name-input'), 'light jog');
    fireEvent.changeText(screen.getByTestId('muscles-used-input'), 'legs');
    fireEvent.changeText(screen.getByTestId('workout-effort-input'), '80');
    fireEvent.changeText(screen.getByTestId('duration-input'), '900');

    fireEvent.press(screen.getByTestId('add-button'));

    screen.getByTestId('display-container');

    fireEvent.press(screen.getByTestId('add-button'));
  });
});
