/**
 * @jest-environment jsdom
 */
import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import ComparisonComponent from '../ComparisonComponent';
import { comparison } from '../comparison';

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

    test('Then the modal should be titled with "Comparing"', () => {
      expect(screen.getAllByText('Comparing')).toHaveLength(1);
    });
  });
});

describe('Given a comparison Object with one value', () => {
  const model: comparison = { Size: { mainValue: '2.0', otherValue: null } };
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
      expect((screen.getByTestId('Size')).children[0].textContent).toBe('2.0');
      expect((screen.getByTestId('Size')).children[1].textContent).toBe('Size');
    });

    test('And there are only two elements', () => {
      expect((screen.getByTestId('Size')).childNodes).toHaveLength(2);
    });
  });
});

describe('Given a comparison Object with only the other value', () => {
  const model: comparison = { Size: { mainValue: null, otherValue: '3.0' } };
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
      expect((screen.getByTestId('Size')).children[0].textContent).toBe('Size');
      expect((screen.getByTestId('Size')).children[1].textContent).toBe('3.0');
    });

    test('And there are only two elements', () => {
      expect((screen.getByTestId('Size')).childNodes).toHaveLength(2);
    });
  });
});


describe('Given a comparison Object with only the other value', () => {
  const model: comparison = { Heft: { mainValue: null, otherValue: '3.0' } };
  beforeEach(() => {
    render(<ComparisonComponent comparison={model} />);
  });
  afterEach(cleanup);

  describe('When nothing happens', () => {
    test('Then the heft comparisons is shown', () => {
      expect(screen.queryAllByText('Heft')).toHaveLength(1);
    });
  });

  describe('When give comparison prop with data', () => {
    test('Then the size comparisons is shown', () => {
      expect((screen.getByTestId('Heft')).children[0].textContent).toBe('Heft');
      expect((screen.getByTestId('Heft')).children[1].textContent).toBe('3.0');
    });

    test('And there are only two elements', () => {
      expect((screen.getByTestId('Heft')).childNodes).toHaveLength(2);
    });
  });
});