import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing'
import { NextLaunch } from './NextLaunch';
import { mockedResponses } from '../../api/mockedResponses';

const renderNextLaunch = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false} >
        <MemoryRouter>
            <NextLaunch />
        </MemoryRouter>
    </MockedProvider>
);

describe('Tests for <NextLaunch /> component', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderNextLaunch();
    })

    it("Should initially display loading", () => {
        const { getByText } = renderNextLaunch();

        expect(getByText(/loading/i)).toBeInTheDocument();
    })

    it("Should display next launch's data", async () => {
        const { getByTestId, getByText } = renderNextLaunch();

        await waitForDomChange();

        expect(getByTestId('missionName')).toHaveTextContent("Starlink-12 (v1.0)");
        expect(getByTestId('missionSite')).toHaveTextContent("Kennedy Space Center Historic Launch Complex 39A");
        expect(getByTestId('missionPatch')).toBeInTheDocument();

        const secondsLeft = Math.round((new Date(1600366740 * 1000).getTime() - new Date().getTime()) / 1000);
        const days = Math.max(Math.floor(secondsLeft / 86400), 0);
        const hours = Math.max(Math.floor((secondsLeft - days * 86400) / 3600), 0);
        const minutes = Math.max(Math.floor((secondsLeft - days * 86400 - hours * 3600) / 60), 0);
        const seconds = Math.max(secondsLeft - days * 86400 - hours * 3600 - minutes * 60, 0);

        expect(getByTestId('days')).toHaveTextContent(`${(days < 10) ? `0${days}` : days}`)
        expect(getByText(/days/i)).toBeInTheDocument();
        expect(getByTestId('hours')).toHaveTextContent(`${(hours < 10) ? `0${hours}` : hours}`)
        expect(getByText(/hours/i)).toBeInTheDocument();
        expect(getByTestId('minutes')).toHaveTextContent(`${(minutes < 10) ? `0${minutes}` : minutes}`)
        expect(getByText(/minutes/i)).toBeInTheDocument();
        expect(getByTestId('seconds')).toHaveTextContent(`${(seconds < 10) ? `0${seconds}` : seconds}`)
        expect(getByText(/seconds/i)).toBeInTheDocument();
    })
})