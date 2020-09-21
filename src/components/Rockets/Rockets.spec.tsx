import React from 'react';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { Rockets } from './Rockets';

const renderRockets = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <Rockets />
    </MockedProvider>
);

describe ('Tests for <Rockets />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderRockets();
    })

    it ('Displays heading "Rockets"', () => {
        const { getByText } = renderRockets();
        expect( getByText(/rockets/i) ).toBeInTheDocument();
    })

    it ('Initially displays "Loading Data..."', () => {
        const { getByText }= renderRockets();
        expect( getByText(/loading data.../i) ).toBeInTheDocument();
    })

    it ('Displays rocket data for each rocket properly', async () => {
        const { getByTestId, getByText }= renderRockets();
        await waitForDomChange();

        expect( getByText('Falcon 1') ).toBeInTheDocument();
        expect( getByTestId('status1') ).toHaveTextContent(/active: yes/i);
        expect( getByText('First Flight Date: 2006-03-24') ).toBeInTheDocument();
        expect( getByText(/description: the falcon 1 was an expendable/i) ).toBeInTheDocument();
        expect( getByTestId('wiki1') ).toHaveAttribute('title', 'Wikipedia Link');
    })
})