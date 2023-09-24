import * as React from 'react';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import CreateWorkout from './CreateWorkout';

describe('create workout tests', () => {
  beforeEach(() => {
    render(<CreateWorkout />);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
