import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { RecentLaunches } from './RecentLaunches';

const renderRecentLaunches = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <MemoryRouter>
            <RecentLaunches />
        </MemoryRouter>
    </MockedProvider>
);

describe ('Tests for <RecentLaunches />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderRecentLaunches();
    })

    it ('Initially displays "Loading..."', () => {
        const { getByText } = renderRecentLaunches();

        expect( getByText(/Loading data.../i) ).toBeInTheDocument();
    });

    it ('Displays LaunchCards for 3 most recent launches', async () => {
        const { getByText } = renderRecentLaunches();
        await waitForDomChange();

        expect( getByText(/101/) ).toBeInTheDocument();
        expect( getByText(/100/) ).toBeInTheDocument();
        expect( getByText(/99/) ).toBeInTheDocument();
    })
});