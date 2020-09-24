import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { Footer } from './Footer';

const renderHeader = () => render(
    <MemoryRouter>
        <Footer />
    </MemoryRouter>
);

describe ('Tests for <Footer />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderHeader();
    })

    it ('Displays all important links for navigation', () => {
        const { getByTestId } = renderHeader();

        expect( getByTestId('home') ).toBeInTheDocument();
        expect( getByTestId('launches') ).toBeInTheDocument();
        expect( getByTestId('rockets') ).toBeInTheDocument();
        expect( getByTestId('history') ).toBeInTheDocument();
        expect( getByTestId('about') ).toBeInTheDocument();
    })

    it ('Displays all important links for navigation', () => {
        const { getByTestId } = renderHeader();

        expect( getByTestId('twitter') ).toBeInTheDocument();
        expect( getByTestId('youtube') ).toBeInTheDocument();
        expect( getByTestId('instagram') ).toBeInTheDocument();
        expect( getByTestId('flicker') ).toBeInTheDocument();
        expect( getByTestId('linkedin') ).toBeInTheDocument();
    })

    it ('Displays SpaceX Headquarter address', () => {
        const { getByText, getByTestId } = renderHeader();
        
        expect( getByText(/Rocket Road/i) ).toBeInTheDocument();
        expect( getByText(/Hawthorne/i) ).toBeInTheDocument();
        expect( getByText(/California, USA/i) ).toBeInTheDocument();
        expect( getByTestId('address') ).toBeInTheDocument();
    })
})