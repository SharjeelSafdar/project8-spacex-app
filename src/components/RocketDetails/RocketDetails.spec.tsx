import React from 'react';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { RocketDetails } from './RocketDetails';

const renderRocketDetails = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <RocketDetails />
    </MockedProvider>
);

describe ('Tests for <RocketDetails />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderRocketDetails();
    })

    it ('Displays "Loading data..." initially', () => {
        const { getByText } = renderRocketDetails();
        expect( getByText(/loading data.../i) ).toBeInTheDocument();
    })

    it('Displays general details correctly', async () => {
        const { getByText, getByTestId } = renderRocketDetails();
        await waitForDomChange();

        expect( getByTestId('heading') ).toHaveTextContent(/falcon 9/i);
        expect( getByText(/a two-stage rocket designed and manufactured by SpaceX/i) ).toBeInTheDocument();
        expect( getByText('General Details') ).toBeInTheDocument();
        expect( getByTestId('active') ).toHaveTextContent(/yes/i);
        expect( getByTestId('first-flight') ).toHaveTextContent(/2010-06-04/i);
        expect( getByTestId('height') ).toHaveTextContent(/70 m/i);
        expect( getByTestId('diameter') ).toHaveTextContent(/3.7 m/i);
        expect( getByTestId('mass') ).toHaveTextContent(/549054 kg/i);
        expect( getByTestId('stages') ).toHaveTextContent(/2/i);
        expect( getByTestId('boosters') ).toHaveTextContent(/0/i);
        expect( getByTestId('num-legs') ).toHaveTextContent(/4/i);
        expect( getByTestId('material-legs') ).toHaveTextContent(/carbon fiber/i);
        expect( getByTestId('cost-per-launch') ).toHaveTextContent(/50000000/i);
        expect( getByTestId('success-rate') ).toHaveTextContent(/97%/i);
        expect( getByTestId('company') ).toHaveTextContent(/spacex/i);
        expect( getByTestId('country') ).toHaveTextContent(/United States/i);
        expect( getByTestId('wiki-link') ).toBeInTheDocument();
    })

    it('Displays first stage details correctly', async () => {
        const { getByTestId } = renderRocketDetails();
        await waitForDomChange();

        expect( getByTestId('reusable') ).toHaveTextContent(/yes/i);
        expect( getByTestId('num-engines1') ).toHaveTextContent('9');
        expect( getByTestId('fuel1') ).toHaveTextContent('385 tons');
        expect( getByTestId('burn1') ).toHaveTextContent('162 s');
        expect( getByTestId('thrust-sea1') ).toHaveTextContent('7607 kN');
        expect( getByTestId('thrust-vacuum1') ).toHaveTextContent('8227 kN');
    })

    it('Displays second stage details correctly', async () => {
        const { getByTestId } = renderRocketDetails();
        await waitForDomChange();

        expect( getByTestId('num-engines2') ).toHaveTextContent('1');
        expect( getByTestId('fuel2') ).toHaveTextContent('90 tons');
        expect( getByTestId('burn2') ).toHaveTextContent('397 s');
        expect( getByTestId('thrust-vacuum2') ).toHaveTextContent('934 kN');
        expect( getByTestId('payload1') ).toHaveTextContent(/dragon/i);
        expect( getByTestId('payload2') ).toHaveTextContent(/composite fairing/i);
        expect( getByTestId('fairing-height') ).toHaveTextContent(/13.1 m/i);
        expect( getByTestId('fairing-diameter') ).toHaveTextContent(/5.2 m/i);
    })

    it('Displays engines details correctly', async () => {
        const { getByTestId } = renderRocketDetails();
        await waitForDomChange();

        expect( getByTestId('total-engines') ).toHaveTextContent('9');
        expect( getByTestId('type') ).toHaveTextContent(/merlin/i);
        expect( getByTestId('version') ).toHaveTextContent(/1d+/i);
        expect( getByTestId('thrust-vacuum2') ).toHaveTextContent('934 kN');
        expect( getByTestId('layout') ).toHaveTextContent(/octaweb/i);
        expect( getByTestId('loss') ).toHaveTextContent(/2/i);
        expect( getByTestId('propellant1') ).toHaveTextContent(/liquid oxygen/i);
        expect( getByTestId('propellant2') ).toHaveTextContent(/rp-1 kerosene/i);
        expect( getByTestId('thrust-sea-t') ).toHaveTextContent('845 kN');
        expect( getByTestId('thrust-vacuum-t') ).toHaveTextContent('914 kN');
        expect( getByTestId('ratio') ).toHaveTextContent('180.1');
    })

    it('Displays images of rocket correctly', async () => {
        const { getAllByTestId } = renderRocketDetails();
        await waitForDomChange();

        const images: Array<any> = getAllByTestId('image');
        expect( images.length ).toBeGreaterThanOrEqual(1);
    })
})