import React from 'react';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { History } from './History';

const renderHistory = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <History />
    </MockedProvider>
);

describe ('Tests for <History />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderHistory();
    })

    it ('Display the heading "History"', () => {
        const { getByText } = renderHistory();

        expect( getByText('History') ).toBeInTheDocument();
    })

    it ('Displays a single history item properly', async () => {
        const { getByTestId } = renderHistory();
        await waitForDomChange();   
        const firstHistoryItem = getByTestId('historyItem1');

        expect(firstHistoryItem).toHaveTextContent(/Falcon 1 Makes History/i);
        expect(firstHistoryItem).toHaveTextContent(/Date: Sun, 28 Sep 2008 23:15:00 GMT/i);
        expect(firstHistoryItem).toHaveTextContent(/Details: Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit/i);
        expect(firstHistoryItem).toHaveTextContent(/Flight Number: 4/i);
        expect( getByTestId('article1') ).toBeInTheDocument();
        expect( getByTestId('article1') ).toHaveAttribute('title', 'Article Link');
        expect( getByTestId('wiki1') ).toBeInTheDocument();
        expect( getByTestId('wiki1') ).toHaveAttribute('title', 'Wikipedia Link');
    })

    it ('Displays all 20 history items', async () => {
        const { getByTestId } = renderHistory();
        await waitForDomChange();

        for(let iii = 1; iii <= 20; iii++)
            expect( getByTestId(`historyItem${iii}`) ).toBeInTheDocument();
    })
})