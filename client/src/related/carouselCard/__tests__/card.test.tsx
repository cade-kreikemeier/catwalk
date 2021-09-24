/**
 * @jest-environment jsdom
 */
import CarouselCard from '../carouselCard';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

afterAll(cleanup);

test('displays infomation, correctly displayed', async () => {
  let clicked = false;
  await act(async () => {
    render(<CarouselCard
      imageUrl={'http://www.example.com/pic.jpg'}
      metaData={{ name: 'T-Shirt', category: 'Shirt', price: '10.00' }}
      rating={4.2}
      actionChild={
        <span>Child</span>
      }
      actionCallback={() => { clicked = true; }}
      localCallback={() => { throw Error(); }}
    />);
  });

  expect(screen.queryByTestId('thumbnail')).toHaveAttribute('src', 'http://www.example.com/pic.jpg');
  expect(screen.queryByTestId('name')).toHaveTextContent('T-Shirt');
  expect(screen.queryByTestId('category')).toHaveTextContent('Shirt');
  expect(screen.queryByTestId('price')).toHaveTextContent('$10.00');

  expect(clicked).toBe(false);
});

test('when imageUrl is empty string, no image should be shown', async () => {
  let clicked = false;
  await act(async () => {
    render(<CarouselCard
      imageUrl={''}
      metaData={{ name: 'T-Shirt', category: 'Shirt', price: '10.00' }}
      rating={4.2}
      actionChild={
        <span>Child</span>
      }
      actionCallback={() => { clicked = true; }}
      localCallback={() => { throw Error(); }}
    />);
  });

  expect(screen.queryByTestId('thumbnail')).not.toBeInTheDocument();
  expect(screen.queryByTestId('name')).toHaveTextContent('T-Shirt');
  expect(screen.queryByTestId('category')).toHaveTextContent('Shirt');
  expect(screen.queryByTestId('price')).toHaveTextContent('$10.00');

  expect(clicked).toBe(false);
});

describe('Given a card with valid props', () => {
  let actionClicked = false;
  let localClicked = false;
  beforeEach(async () => {
    await act(async () => {
      render(<CarouselCard
        imageUrl={'http://www.example.com/pic.jpg'}
        metaData={{ name: 'T-Shirt', category: 'Shirt', price: '10.00' }}
        rating={4.2}
        actionChild={
          <span>Action</span>
        }
        actionCallback={() => { actionClicked = true; }}
        localCallback={() => { localClicked = true; }}
      />);
    });
  });
  afterEach(() => {
    actionClicked = false;
    localClicked = false;
    cleanup();
  });

  describe('When the action button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText('Action'));
    });
    test('Then the action callback will be called', () => {
      expect(actionClicked).toBeTruthy();
    });

    test('Then the local callback will not be called', () => {
      expect(localClicked).toBeFalsy();
    });
  });

  describe('When the name is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByTestId('name'));
    });
    test('Then the local callback will be called', () => {
      expect(localClicked).toBeTruthy();
    });
  });

  describe('When the image is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByTestId('thumbnail'));
    });
    test('Then the local callback will be called', () => {
      expect(localClicked).toBeTruthy();
    });
  });
});