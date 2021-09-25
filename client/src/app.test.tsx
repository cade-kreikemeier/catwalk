/**
 * @jest-environment jsdom
 */
import { act, render } from '@testing-library/react';
import App from './App';
import React from 'react';

xtest('testing the app', () => {
  act(() => {
    render(<App></App>);
  });
});