import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from './Home';

describe ('Tests for <Home /> component', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        render(<Home />);
    })

    it ('Contains a hero image', () => {
        const { getByTestId } = render(<Home />);
        expect( getByTestId('heroImage') ).toBeInTheDocument();
    })
})