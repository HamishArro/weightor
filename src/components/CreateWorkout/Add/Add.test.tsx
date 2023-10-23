import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {fireEvent, render, screen, act} from '@testing-library/react-native';
import Add from './Add';

const props = {
  handleCardio: jest.fn(),
  handleWeight: jest.fn(),
  handleBack: jest.fn(),
};

describe('Add tests', () => {
  beforeEach(() => {
    render(<Add {...props} />);
  });

  it('will call handle back when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('back-button')));

    expect(props.handleBack).toHaveBeenCalled();
  });

  it('will call handle cardio when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('cardio-button')));

    expect(props.handleCardio).toHaveBeenCalled();
  });

  it('will call handle weight when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('weight-button')));

    expect(props.handleWeight).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
