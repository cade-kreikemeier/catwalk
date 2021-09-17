/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import CarouselCard from '../carouselCard';
import { cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

afterAll(cleanup);

test('displays infomation, correctly displayed', async () => {
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

  expect(screen.getByTestId('name')).toHaveTextContent('T-Shirt');
  expect(screen.getByTestId('category')).toHaveTextContent('Shirt');
  expect(screen.getByTestId('price')).toHaveTextContent('$10.00');
  expect(screen.getByTestId('rating')).toHaveTextContent('Rating: 4.2');

  expect(clicked).toBe(false);
});