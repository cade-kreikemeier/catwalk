/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import ComparisonComponent from '../ComparisonComponent';
import { comparison } from '../Context';

describe('Given a blank comparison Object', () => {
  const model: comparison = {};
  beforeEach(() => {
    render(<ComparisonComponent comparison={model} />);
  });
  afterEach(cleanup);

  describe('When nothing happens', () => {
    test('Then no comparisons are shown', () => {
      expect(screen.queryAllByText('Size')).toHaveLength(0);
    });
  });
});

describe('Given a comparison Object with one value', () => {
  const model: comparison = { size: { mainValue: '2.0', otherValue: null } };
  beforeEach(() => {
    render(<ComparisonComponent comparison={model} />);
  });

  afterEach(cleanup);
  describe('When nothing happens', () => {
    test('Then the size comparisons is shown', () => {
      expect(screen.queryAllByText('Size')).toHaveLength(1);
    });
  });

  describe('When give comparison prop with data', () => {
    test('Then the size comparisons is shown', () => {
      expect((screen.getByTestId('size')).children[0].textContent).toBe('2.0');
      expect((screen.getByTestId('size')).children[1].textContent).toBe('Size');
    });

    test('And there are only two elements', () => {
      expect((screen.getByTestId('size')).childNodes).toHaveLength(2);
    });
  });
});

describe('Given a comparison Object with only the other value', () => {
  const model: comparison = { size: { mainValue: null, otherValue: '3.0' } };
  beforeEach(() => {
    render(<ComparisonComponent comparison={model} />);
  });

  afterEach(cleanup);
  describe('When nothing happens', () => {
    test('Then the size comparisons is shown', () => {
      expect(screen.queryAllByText('Size')).toHaveLength(1);
    });
  });

  describe('When give comparison prop with data', () => {
    test('Then the size comparisons is shown', () => {
      expect((screen.getByTestId('size')).children[0].textContent).toBe('Size');
      expect((screen.getByTestId('size')).children[1].textContent).toBe('3.0');
    });

    test('And there are only two elements', () => {
      expect((screen.getByTestId('size')).childNodes).toHaveLength(2);
    });
  });
});