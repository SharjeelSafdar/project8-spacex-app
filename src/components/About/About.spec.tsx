import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { About } from './About';

describe ('Tests for <About />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        render(<About />);
    });
})