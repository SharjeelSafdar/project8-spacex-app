import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { LaunchDetails } from './LaunchDetails';

const renderLaunchDetails = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <MemoryRouter>
            <LaunchDetails />
        </MemoryRouter>
    </MockedProvider>
);

describe('Tests for <LaunchDetails />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderLaunchDetails();
    })

    it('Initially displays "Loading data..."', () => {
        const { getByText } = renderLaunchDetails();
        expect(getByText(/loading data.../i)).toBeInTheDocument();
    })

    it('Correctly displays launch details', async () => {
        const { getByText, getByTestId, getAllByTestId } = renderLaunchDetails();
        await waitForDomChange();

        expect(getByTestId('mission-patch')).toBeInTheDocument();
        expect(getByText(/SAOCOM 1B, GNOMES-1, Tyvak-0172/i)).toBeInTheDocument();
        expect(getByText(/flight #101/i)).toBeInTheDocument();
        expect(getByText(/status:/i)).toBeInTheDocument();
        expect(getByText(/success/i)).toBeInTheDocument();
        expect(getByTestId('static-fire')).toHaveTextContent(/not available/i);
        expect(getByTestId('launch-date')).toHaveTextContent(/Sun, 30 Aug 2020 23:18:00 GMT/i);
        expect(getByTestId('rocket')).toHaveTextContent(/falcon 9/i);
        expect(getByText(/Cape Canaveral Air Force Station Space Launch Complex 40/i)).toBeInTheDocument();
        expect(getByText(/second of the two satellite SAOCOM/i)).toBeInTheDocument();
        expect(getByTestId('video-link')).toBeInTheDocument();
        expect(getByTestId('wiki-link')).toBeInTheDocument();
        expect(getByTestId('article-link')).toBeInTheDocument();
        const launchImages = getAllByTestId('launch-image');
        launchImages.forEach((image: any) => expect(image).toBeInTheDocument());
    })
})
