/**
 * @jest-environment jsdom
 */
import CarouselCard from '../carouselCard';
import { cleanup, render, screen } from '@testing-library/react';
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
    />);
  });

  expect(screen.queryByTestId('thumbnail')).toHaveAttribute('src', 'http://www.example.com/pic.jpg');
  expect(screen.queryByTestId('name')).toHaveTextContent('T-Shirt');
  expect(screen.queryByTestId('category')).toHaveTextContent('Shirt');
  expect(screen.queryByTestId('price')).toHaveTextContent('$10.00');
  expect(screen.queryByTestId('rating')).toHaveTextContent('Rating: 4.2');

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
    />);
  });

  expect(screen.queryByTestId('thumbnail')).not.toBeInTheDocument();
  expect(screen.queryByTestId('name')).toHaveTextContent('T-Shirt');
  expect(screen.queryByTestId('category')).toHaveTextContent('Shirt');
  expect(screen.queryByTestId('price')).toHaveTextContent('$10.00');
  expect(screen.queryByTestId('rating')).toHaveTextContent('Rating: 4.2');

  expect(clicked).toBe(false);
});