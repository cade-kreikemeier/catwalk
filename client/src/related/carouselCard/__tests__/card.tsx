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
  let component: RenderResult<typeof import('@testing-library/dom/types/queries'), HTMLElement>;
  let clicked = false;
  await act(async () => {
    component = render(<CarouselCard
      imageUrl={''}
      metaData={{ name: 'T-Shirt', category: 'Shirt', price: '10.00' }}
      rating={4.2}
      actionChild={
        <span>Child</span>
      }
      actionCallback={() => { clicked = true; }}
    />);
  });

  expect(component.getByText('$10.00')).toHaveTextContent('$10.00');

  expect(clicked).toBe(false);
});