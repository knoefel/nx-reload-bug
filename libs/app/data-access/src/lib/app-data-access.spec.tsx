import React from 'react';
import { render } from '@testing-library/react';

import AppDataAccess from './app-data-access';

describe('AppDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
