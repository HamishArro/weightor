import * as React from 'react';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import Add from './Add';

describe('add tests', () => {
  beforeEach(() => {
    render(<Add />);
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
