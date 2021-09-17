/**
 * @jest-environment jsdom
 */
import CarouselCard from '../carouselCard';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

test('passes', async () => {
  let clicked = false;
  act(() => {
    render(<CarouselCard
      imageUrl={''}
      metaData={{ name: '', category: '', price: '' }}
      rating={1}
      actionChild={
        <span>Child</span>
      }
      actionCallback={() => { clicked = true; }}
    />);
  });

  expect(clicked).toBe(false);
});