import * as React from 'react';
import {describe, it, expect, beforeEach, jest} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import Display from './Display';

const props = {
  exercises: [],
  addHandler: jest.fn(),
  addButtonText: 'Add',
};

describe('display tests', () => {
  beforeEach(() => {
    render(<Display {...props} />);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
