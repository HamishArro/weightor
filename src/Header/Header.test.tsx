import * as React from 'react';
import {describe, it, expect, beforeEach} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';
import Header from './Header';

describe('Header tests', () => {
  beforeEach(() => {
    render(<Header title="title" />);
  });

  it('renders the header correctly', () => {
    expect(screen.queryByTestId('title')).toHaveTextContent('title');
    expect(screen.queryByTestId('header-container')).toBeOnTheScreen();
  });

  it('matches snapshot', () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
