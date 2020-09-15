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

    it ("Should display next launch's data", () => {
        const { getByTestId, getByText } = render(<Home />);

        expect( getByText(/days/i) ).toBeInTheDocument();
        expect( getByText(/hours/i) ).toBeInTheDocument();
        expect( getByText(/minutes/i) ).toBeInTheDocument();
        expect( getByText(/seconds/i) ).toBeInTheDocument();

        expect( getByTestId('missionName') ).toBeInTheDocument();
        expect( getByTestId('missionSite') ).toBeInTheDocument();
        expect( getByTestId('missionPatch') ).toBeInTheDocument();
    })
})