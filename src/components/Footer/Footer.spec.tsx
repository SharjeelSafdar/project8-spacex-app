import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Footer } from './Footer';

describe ('Tests for <Footer />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        render(<Footer />);
    })

    it ('Displays all important links for navigation', () => {
        const { getByTestId } = render(<Footer />);

        expect( getByTestId('home') ).toBeInTheDocument();
        expect( getByTestId('launches') ).toBeInTheDocument();
        expect( getByTestId('rockets') ).toBeInTheDocument();
        expect( getByTestId('history') ).toBeInTheDocument();
        expect( getByTestId('about') ).toBeInTheDocument();
    })

    it ('Displays all important links for navigation', () => {
        const { getByTestId } = render(<Footer />);

        expect( getByTestId('twitter') ).toBeInTheDocument();
        expect( getByTestId('youtube') ).toBeInTheDocument();
        expect( getByTestId('instagram') ).toBeInTheDocument();
        expect( getByTestId('flicker') ).toBeInTheDocument();
        expect( getByTestId('linkedin') ).toBeInTheDocument();
    })

    it ('Displays SpaceX Headquarter address', () => {
        const { getByText, getByTestId } = render(<Footer />);
        
        expect( getByText(/Rocket Road/i) ).toBeInTheDocument();
        expect( getByText(/Hawthorne/i) ).toBeInTheDocument();
        expect( getByText(/California, USA/i) ).toBeInTheDocument();
        expect( getByTestId('address') ).toBeInTheDocument();
    })
})