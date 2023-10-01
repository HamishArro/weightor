import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {render, screen, fireEvent, act} from '@testing-library/react-native';
import Create from './Create';

const props = {
  onPress: jest.fn(),
  title: 'create',
};

describe('create tests', () => {
  beforeEach(() => {
    render(<Create {...props} />);
  });

  it('calls on press when clicked', () => {
    act(() => fireEvent.press(screen.getByTestId('create-button')));

    expect(props.onPress).toBeCalled();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
