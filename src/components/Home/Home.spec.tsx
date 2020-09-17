import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Home } from './Home';
import { mockedResponses } from '../../api/mockedResponses';

const renderHome = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <Home />
    </MockedProvider>
);

describe ('Tests for <Home /> component', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderHome();
    })

    it ('Contains a hero image', () => {
        const { getByTestId } = renderHome();
        expect( getByTestId('heroImage') ).toBeInTheDocument();
    })
})