import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { LaunchCard } from './LaunchCard';

const renderLaunchCard = (flightNumber: number) => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <MemoryRouter>
            <LaunchCard flightNumber={flightNumber} />
        </MemoryRouter>
    </MockedProvider>
);

describe ('Tests for <LaunchCard />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderLaunchCard(100);
    });

    it ('Initially displays "Loading..."', () => {
        const { getByText } = renderLaunchCard(100);

        expect( getByText(/Loading data.../i) ).toBeInTheDocument();
    });
    
    it ('Displays data of a single flight', async () => {
        const { getByTestId, getByText } = renderLaunchCard(100);
        await waitForDomChange();

        expect( getByTestId('mission-patch') ).toBeInTheDocument();
        expect( getByTestId('flight-number') ).toHaveTextContent(/flight #100/i);
        expect( getByTestId('flight-status') ).toHaveTextContent(/status: success/i);
        expect( getByTestId('mission-name') ).toHaveTextContent("Mission Name: Starlink-10 (v1.0) & SkySat 19-21");
        expect( getByTestId('launch-site') ).toHaveTextContent(/launch site: CCAFS SLC 40/i);
        expect( getByTestId('launch-date') ).toHaveTextContent(/launch date: /i);
        expect( getByTestId('video-link') ).toBeInTheDocument();
        expect( getByTestId('article-link') ).toBeInTheDocument();
        expect( getByText(/more details.../i) ).toBeInTheDocument();
    });
});