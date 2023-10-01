import * as React from 'react';
import {describe, it, beforeEach} from '@jest/globals';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import CreateWorkout from './CreateWorkout';

describe('create workout tests', () => {
  beforeEach(() => {
    render(<CreateWorkout />);
  });

  it(`will take me to create when I haven't added an exercise`, () => {
    act(() => fireEvent.press(screen.getByTestId('create-button')));

    screen.getByTestId('add-container');

    act(() => fireEvent.press(screen.getByTestId('back-button')));

    screen.getByTestId('create-button');
  });

  it(`will take me to add when I click back on cardio`, () => {
    act(() => fireEvent.press(screen.getByTestId('create-button')));

    screen.getByTestId('add-container');

    act(() => fireEvent.press(screen.getByTestId('cardio-button')));

    screen.getByTestId('cardio-container');

    act(() => fireEvent.press(screen.getByTestId('back-button')));

    screen.getByTestId('add-container');
  });

  it(`can create a weight exercise successfully`, () => {
    act(() => fireEvent.press(screen.getByTestId('create-button')));

    screen.getByTestId('add-container');

    act(() => fireEvent.press(screen.getByTestId('weight-button')));
  });

  it('can create a cardio workout successfully', async () => {
    act(() => fireEvent.press(screen.getByTestId('create-button')));

    act(() => fireEvent.press(screen.getByTestId('cardio-button')));

    act(() => {
      fireEvent.changeText(screen.getByTestId('name-input'), 'light jog');
      fireEvent.changeText(screen.getByTestId('muscles-used-input'), 'legs');
      fireEvent.changeText(screen.getByTestId('workout-effort-input'), '80');
      fireEvent.changeText(screen.getByTestId('duration-input'), '900');
    });

    act(() => fireEvent.press(screen.getByTestId('add-button')));

    screen.getByTestId('display-container');

    act(() => fireEvent.press(screen.getByTestId('add-button')));

    screen.getByTestId('add-container');

    act(() => fireEvent.press(screen.getByTestId('back-button')));

    screen.getByTestId('display-container');
  });
});
