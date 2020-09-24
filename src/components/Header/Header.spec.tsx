import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { Header } from './Header';

const renderHeader = () => render(
    <MemoryRouter>
        <Header />
    </MemoryRouter>
);

describe ('Tests for Header component', () => {
    afterEach(cleanup)

    it ('Renders without crashing', () => {
        renderHeader();
    })

    it ('Bears SpaceX title', () => {
        const { getByText } = renderHeader();
        expect( getByText(/spacex info/i) ).toBeInTheDocument();
    })
    
    it ('Contains buttons for links to other pages', () => {
        const { getByTestId } = renderHeader();
        expect( getByTestId('home-link') ).toBeInTheDocument();
        expect( getByTestId('launches-link') ).toBeInTheDocument();
        expect( getByTestId('rockets-link') ).toBeInTheDocument();
        expect( getByTestId('history-link') ).toBeInTheDocument();
        expect( getByTestId('about-link') ).toBeInTheDocument();
    })
})