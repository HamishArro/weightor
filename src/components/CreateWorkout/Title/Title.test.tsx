import * as React from 'react';
import {describe, it, beforeEach, expect, jest} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Title from './Title';

const props = {title: 'title', handleBack: jest.fn()};

describe('Title tests', () => {
  beforeEach(() => {
    render(<Title {...props} />);
  });

  it('calls back when clicked', () => {
    fireEvent.press(screen.getByTestId('back-button'));

    expect(props.handleBack).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
