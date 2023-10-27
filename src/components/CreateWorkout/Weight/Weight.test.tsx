import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {
  fireEvent,
  render,
  screen,
  act,
  within,
} from '@testing-library/react-native';
import Weight, {Cell, SetView, Set} from './Weight';

const setViewProps = {
  id: '1',
  reps: 12,
  weight: 20,
  rest: 60,
  handleRemove: jest.fn(),
};

const setProps = {
  handleBack: jest.fn(),
  handleAdd: jest.fn(),
  visible: true,
  title: 'Add set',
};

const weightProps = {
  handleAdd: jest.fn(),
  handleBack: jest.fn(),
};

const weightExercise = {
  name: 'weight',
  musclesUsed: ['arms'],
  workoutEffort: 50,
  sets: [{reps: 12, weight: 20, rest: 60}],
};

describe('Cell tests', () => {
  it('matches snapshot (number)', () => {
    render(<Cell text={5} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot (text)', () => {
    render(<Cell text="cell" />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});

describe('Set View tests', () => {
  beforeEach(() => {
    render(<SetView {...setViewProps} />);
  });

  it('calls handle remove when clicked', () => {
    fireEvent.press(screen.getByTestId('remove-set-1'));

    expect(setViewProps.handleRemove).toBeCalled();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});

describe('Set tests', () => {
  beforeEach(() => {
    render(<Set {...setProps} />);
  });

  it('save button will not be preset if no values are inputted', () => {
    expect(screen.queryByTestId('save-button')).toBe(null);
  });

  it('invalidates incorrect string', () => {
    act(() => {
      fireEvent.changeText(
        screen.getByTestId('reps-input'),
        JSON.stringify(weightExercise.sets[0].reps),
      );
      fireEvent.changeText(
        screen.getByTestId('weight-input'),
        JSON.stringify(weightExercise.sets[0].weight),
      );
      fireEvent.changeText(
        screen.getByTestId('rest-input'),
        JSON.stringify(weightExercise.sets[0].rest),
      );
    });

    expect(screen.queryByTestId('save-button')).not.toBe(null);

    act(() => {
      fireEvent.changeText(screen.getByTestId('reps-input'), 'is');
      fireEvent.changeText(screen.getByTestId('weight-input'), 'not');
      fireEvent.changeText(screen.getByTestId('rest-input'), 'valid');
    });

    expect(screen.queryByTestId('save-button')).toBe(null);
  });

  it('adds a set correctly', () => {
    act(() => {
      fireEvent.changeText(
        screen.getByTestId('reps-input'),
        JSON.stringify(weightExercise.sets[0].reps),
      );
      fireEvent.changeText(
        screen.getByTestId('weight-input'),
        JSON.stringify(weightExercise.sets[0].weight),
      );
      fireEvent.changeText(
        screen.getByTestId('rest-input'),
        JSON.stringify(weightExercise.sets[0].rest),
      );
    });

    act(() => fireEvent.press(screen.getByTestId('save-button')));

    expect(setProps.handleAdd).toHaveBeenCalledWith(weightExercise.sets[0]);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});

describe('Weight tests', () => {
  beforeEach(() => {
    render(<Weight {...weightProps} />);
  });

  it('will call handle back when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('back-button')));

    expect(weightProps.handleBack).toHaveBeenCalled();
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
    });

    weightExercise.sets.forEach(({reps, weight, rest}) => {
      act(() => fireEvent.press(screen.getByTestId('add-set')));
      act(() => {
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
      act(() => fireEvent.press(screen.getByTestId('save-button')));
    });

    act(() => fireEvent.press(screen.getByTestId('add-button')));

    expect(weightProps.handleAdd).toHaveBeenCalledWith(weightExercise);
  });

  it('can remove a set', () => {
    act(() => fireEvent.press(screen.getByTestId('add-set')));

    act(() => {
      fireEvent.changeText(
        screen.getByTestId('reps-input'),
        JSON.stringify(weightExercise.sets[0].reps),
      );
      fireEvent.changeText(
        screen.getByTestId('weight-input'),
        JSON.stringify(weightExercise.sets[0].weight),
      );
      fireEvent.changeText(
        screen.getByTestId('rest-input'),
        JSON.stringify(weightExercise.sets[0].rest),
      );
    });

    act(() => fireEvent.press(screen.getByTestId('save-button')));

    act(() => fireEvent.press(screen.getByTestId('remove-set-0')));

    expect(screen.queryByTestId('set-view-container-0')).toBeNull();
  });

  it('can close the set modal', () => {
    act(() => fireEvent.press(screen.getByTestId('add-set')));

    act(() =>
      fireEvent.press(
        within(screen.getByTestId('set-container')).getByTestId('back-button'),
      ),
    );
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
