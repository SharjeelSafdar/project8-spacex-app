import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from './Header';

describe ('Tests for Header component', () => {
    afterEach(cleanup)

    it ('Renders without crashing', () => {
        render(<Header />);
    })

    it ('Bears SpaceX title', () => {
        const { getByText } = render(<Header />);
        expect( getByText(/spacex info/i) ).toBeInTheDocument();
    })
    
    it ('Contains buttons for links to other pages', () => {
        const { getByTestId } = render(<Header />);
        expect( getByTestId('home-link') ).toBeInTheDocument();
        expect( getByTestId('launches-link') ).toBeInTheDocument();
        expect( getByTestId('rockets-link') ).toBeInTheDocument();
        expect( getByTestId('history-link') ).toBeInTheDocument();
        expect( getByTestId('about-link') ).toBeInTheDocument();
    })
})