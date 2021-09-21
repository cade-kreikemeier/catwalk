/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
// import { act } from 'react-dom/test-utils';
import Carousel from '../carousel';

describe('Given a carousel with 4 cards', () => {
  beforeEach(() => {
    render(<Carousel
      title="Sample"
      ids={[1, 2, 3, 4]}
      cardCreator={id => (<div key={id}></div>)}
      />);
  });
  afterEach(cleanup);
  describe('When nothing happens', () => {
    test('Then the left arrow should not be visible', () => {
      expect(screen.queryByTestId('carousel-left-button')).toBeFalsy();
    });

    test('Then the right arrow should not be visible', () => {
      screen.debug();
      expect(screen.queryByTestId('carousel-right-button')).toBeFalsy();
    });
  });
});

describe('Given a carousel with 5 cards', () => {
  beforeEach(() => {
    render(<Carousel
      title="Sample"
      ids={[1, 2, 3, 4]}
      cardCreator={id => (<div key={id}></div>)}
      />);
  });
  afterEach(cleanup);
  describe('When nothing happens', () => {
    test('Then the left arrow should not be visible', () => {
      expect(screen.queryByTestId('carousel-left-button')).toBeFalsy();
    });

    test('Then the right arrow should be visible', () => {
      expect(screen.queryByTestId('carousel-right-button')).toBeTruthy();
    });
  });
});