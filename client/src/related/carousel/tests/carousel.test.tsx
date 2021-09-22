/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { func } from 'prop-types';
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

const cardCreator = (id: number) => (<div key={id}>id: {id}</div>);

describe('Given a carousel with 4 cards', () => {
  beforeEach(() => {
    render(<Carousel
      title="Sample"
      ids={[1, 2, 3, 4]}
      cardCreator={cardCreator}
    />);
  });
  afterEach(cleanup);
  describe('When nothing happens', () => {
    thenTheLeftButtonShouldNotBeVisible();

    thenTheRightButtonShouldNotBeVisible();

    test('then the first card should be shown', () => {
      expect(screen.queryByText('id: 1')).toBeTruthy();
    });

    test('then the fourth card should be shown', () => {
      expect(screen.queryByText('id: 4')).toBeTruthy();
    });
  });
});

describe('Given a carousel with 5 cards', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<Carousel
        title="Sample"
        ids={[1, 2, 3, 4, 5]}
        cardCreator={cardCreator}
      />);
    }
    );
  });
  afterEach(cleanup);
  describe('When nothing happens', () => {
    thenTheLeftButtonShouldNotBeVisible();

    thenTheRightButtonShouldBeVisible();

    test('then the fifth card should not be shown', () => {
      expect(screen.queryByText('id: 5')).toBeFalsy();
    });
  });

  describe('When the right button is pressed', () => {
    beforeEach(async () => {
      fireEvent.click(
        screen.getByTestId('carousel-right-button')
      );
    });
    thenTheLeftButtonShouldBeVisible();

    thenTheRightButtonShouldNotBeVisible();

    test('then the fifth card should be shown', () => {
      expect(screen.queryByText('id: 5')).toBeTruthy();
    });

    describe('and when the left button is pressed', () => {
      beforeEach(async () => {
        fireEvent.click(
          screen.getByTestId('carousel-left-button')
        );
      });
      thenTheLeftButtonShouldNotBeVisible();

      thenTheRightButtonShouldBeVisible();
    });
  });
});

