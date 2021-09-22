/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Carousel from '../carousel';

function thenTheLeftButtonShouldBeVisible() {
  test('Then the left arrow should be visible', () => {
    expect(screen.queryByTestId('carousel-left-button')).toBeTruthy();
  });
}

function thenTheRightButtonShouldBeVisible() {
  test('Then the right arrow should be visible', () => {
    expect(screen.queryByTestId('carousel-right-button')).toBeTruthy();
  });
}

function thenTheLeftButtonShouldNotBeVisible() {
  test('Then the left arrow should not be visible', () => {
    expect(screen.queryByTestId('carousel-left-button')).toBeFalsy();
  });
}

function thenTheRightButtonShouldNotBeVisible() {
  test('Then the right arrow should not be visible', () => {
    expect(screen.queryByTestId('carousel-right-button')).toBeFalsy();
  });
}

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
    thenTheLeftButtonShouldNotBeVisible();

    thenTheRightButtonShouldNotBeVisible();
  });
});

describe('Given a carousel with 5 cards', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Carousel
        title="Sample"
        ids={[1, 2, 3, 4, 5]}
        cardCreator={id => (<div key={id}></div>)}
      />);
    }
    );
  });
  afterEach(cleanup);
  describe('When nothing happens', () => {
    thenTheLeftButtonShouldNotBeVisible();

    thenTheRightButtonShouldBeVisible();
  });

  describe('When the right button is pressed', () => {
    beforeEach(async () => {
      fireEvent.click(
        screen.getByTestId('carousel-right-button')
      );
    });
    thenTheRightButtonShouldNotBeVisible();

    thenTheLeftButtonShouldBeVisible();
  });
});

