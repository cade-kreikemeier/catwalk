/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import App from './app';
import React from 'react';

test('testing the app', () => {
  render(<App></App>);
});