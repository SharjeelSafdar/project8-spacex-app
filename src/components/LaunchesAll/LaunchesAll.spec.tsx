import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForDomChange, fireEvent, act } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { LaunchesAll } from './LaunchesAll';

const renderLaunchesAll = () => render(
    <MockedProvider mocks={mockedResponses} addTypename={false}>
        <MemoryRouter>
            <LaunchesAll />
        </MemoryRouter>
    </MockedProvider>
);

describe ('Tests for <LaunchesAll />', () => {
    afterEach(cleanup);

    it ('Renders without crashing', () => {
        renderLaunchesAll();
    })

    it ('Has an initial heading "All Launches"', () => {
        const { getByText } = renderLaunchesAll();

        expect( getByText('All Launches') ).toBeInTheDocument();
    })

    it ('Shows loading text initially', () => {
        const { getByText } = renderLaunchesAll();

        expect( getByText(/Loading data.../i) ).toBeInTheDocument();
    })

    it ('After loading it displays first 10 flights', async () => {
        const { getByText } = renderLaunchesAll();
        await waitForDomChange();

        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        )
    });

    it ('Displays 3 buttons for applying filters', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        expect( getByTestId('all') ).toHaveTextContent('All');
        expect( getByTestId('past') ).toHaveTextContent('Past');
        expect( getByTestId('upcoming') ).toHaveTextContent('Upcoming');
    })

    it ('Displays 2 buttons for changing the order of launches', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        expect( getByTestId('asc') ).toHaveTextContent('Ascending');
        expect( getByTestId('desc') ).toHaveTextContent('Descending');
    })

    it ('Buttons are disabled when fetching data', () => {
        const { getByTestId } = renderLaunchesAll();

        expect( getByTestId('all') ).toBeDisabled();
        expect( getByTestId('past') ).toBeDisabled();
        expect( getByTestId('upcoming') ).toBeDisabled();
        expect( getByTestId('asc') ).toBeDisabled();
        expect( getByTestId('desc') ).toBeDisabled();
    });

    it ('Buttons are enabled when data is fetched', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        expect( getByTestId('all') ).toBeEnabled();
        expect( getByTestId('past') ).toBeEnabled();
        expect( getByTestId('upcoming') ).toBeEnabled();
        expect( getByTestId('asc') ).toBeEnabled();
        expect( getByTestId('desc') ).toBeEnabled();
    });

    it ('Displays 10 launhes from end when descending button is pressed', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        expect( getByText('Flight #1') ).toBeInTheDocument();

        act( () => {fireEvent.click( getByTestId('desc') )} );
        await waitForDomChange();

        [ 115, 112, 110, 109, 108, 107, 106, 105, 104, 103 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        )
    }) 

    it ('Displays 10 launhes from start when ascending button is pressed', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        expect( getByText('Flight #1') ).toBeInTheDocument();

        act( () => {fireEvent.click( getByTestId('desc') )});
        await waitForDomChange();
        expect( getByText('Flight #115') ).toBeInTheDocument();
        act(() => {fireEvent.click( getByTestId('asc') )});
        for (let iii = 1; iii <= 10; ++iii)
            expect( getByText(`Flight #${iii}`) ).toBeInTheDocument();
    })

    it ('Displays a button for showing more results', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        const moreBtn = getByTestId('more');
        
        expect( moreBtn ).toHaveTextContent('More Results');
        expect( moreBtn ).toBeEnabled();
    })

    it ('Displays 20 launhes from start when more results button is pressed', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        const moreBtn = getByTestId('more');
        expect( getByText('Flight #1') ).toBeInTheDocument();
        expect( moreBtn ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('more') )});
        await waitForDomChange();
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 95, 96, 97, 98, 99 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        )
    });

    it ('More results button gets disabled after all launches are shown', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        const moreBtn = getByTestId('more');
        // Ensure results for flight number 1 to 10 are shown.
        expect( getByText('Flight #1') ).toBeInTheDocument();

        // Press more button until no more results are left.
        act(() => {fireEvent.click( moreBtn )});
        act(() => {fireEvent.click( moreBtn )});
        act(() => {fireEvent.click( moreBtn )});
        
        expect( moreBtn ).toHaveTextContent('No more results');
        expect( moreBtn ).toBeDisabled();
    })

    it ('More results btn functions properly in descending order results', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        const moreBtn = getByTestId('more');
        
        // Show 10 launches in descending order
        act(() => {fireEvent.click( getByTestId('desc') )});
        await waitForDomChange();
        // 20 launches
        act(() => {fireEvent.click( moreBtn )});
        // 30 launches
        act(() => {fireEvent.click( moreBtn )});
        // 33 launches
        act(() => {fireEvent.click( moreBtn )});
        await waitForDomChange();
        [ 115, 103, 102, 14, 13, 4, 3, 2, 1 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        expect( moreBtn ).toHaveTextContent('No more results');
        expect( moreBtn ).toBeDisabled();
    })

    it ('Displays past launches in descending order when "Past" button is pressed', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        act(() => {fireEvent.click( getByTestId('past') )});
        await waitForDomChange();

        [ 102, 101, 100, 99, 98, 97, 96, 95, 15, 14 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );
    })

    it ('More Results button functions normally with past filter', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        // Display past launches
        act(() => {fireEvent.click( getByTestId('past') )});
        await waitForDomChange();

        // More button is available
        const moreBtn = getByTestId('more');
        expect( moreBtn ).toHaveTextContent('More Results');
        expect( moreBtn ).toBeEnabled();

        // 20 past launches
        act(() => {fireEvent.click( moreBtn )});

        // 23 past launches
        act(() => {fireEvent.click( moreBtn )});
        await waitForDomChange();
        [ 102, 14, 1 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        // More results button shouldn't be available, now.
        expect( moreBtn ).toHaveTextContent('No more results');
        expect( moreBtn ).toBeDisabled();
    })

    it ('Ascending and descending button work normally with past filter', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        // Display past launches
        act(() => {fireEvent.click( getByTestId('past') )});
        await waitForDomChange();
        [ 102, 14 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        act(() => {fireEvent.click( getByTestId('asc') )});
        await waitForDomChange();
        [ 1, 10 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        act(() => {fireEvent.click( getByTestId('desc') )});
        [ 102, 14 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );
    })

    it ('Displays upcoming launches in ascending order when "Upcoming" button is pressed', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        act(() => {fireEvent.click( getByTestId('upcoming') )});
        await waitForDomChange();

        [ 103, 115 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );
    })

    it ('More Results button functions normally with upcoming filter', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        // Display past launches
        act(() => {fireEvent.click( getByTestId('upcoming') )});
        await waitForDomChange();

        // More results button shouldn't be available, now.
        const moreBtn = getByTestId('more');
        expect( moreBtn ).toHaveTextContent('No more results');
        expect( moreBtn ).toBeDisabled();
    })

    it ('Ascending and descending button work normally with upcoming filter', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        // Display past launches
        act(() => {fireEvent.click( getByTestId('upcoming') )});
        await waitForDomChange();
        [ 103, 115 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        act(() => {fireEvent.click( getByTestId('desc') )});
        await waitForDomChange();
        [ 115, 103 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );

        act(() => {fireEvent.click( getByTestId('asc') )});
        [ 103, 115 ].forEach(
            flightNum => expect( getByText(`Flight #${flightNum}`) ).toBeInTheDocument()
        );
    })

    it ('Has a heading "Past Launches" when "Past" filter is appiled', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        act(() => {fireEvent.click( getByTestId('past') )});
        expect( getByText('Past Launches') ).toBeInTheDocument();
    })

    it ('Has a heading "Upcoming Launches" when "Upcoming" filter is appiled', async () => {
        const { getByText, getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        act(() => {fireEvent.click( getByTestId('upcoming') )});
        expect( getByText('Upcoming Launches') ).toBeInTheDocument();
    })

    it ('Cursor for filter button changes to "not allowed" during loading', () => {
        const { getByTestId } = renderLaunchesAll();
        expect( getByTestId('all') ).toHaveStyle('cursor: not-allowed')
        expect( getByTestId('past') ).toHaveStyle('cursor: not-allowed')
        expect( getByTestId('upcoming') ).toHaveStyle('cursor: not-allowed')
        expect( getByTestId('asc') ).toHaveStyle('cursor: not-allowed')
        expect( getByTestId('desc') ).toHaveStyle('cursor: not-allowed')
    })

    it ('Cursor for filter button changes to "pointer" after loading', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();

        expect( getByTestId('all') ).toHaveStyle('cursor: pointer')
        expect( getByTestId('past') ).toHaveStyle('cursor: pointer')
        expect( getByTestId('upcoming') ).toHaveStyle('cursor: pointer')
        expect( getByTestId('asc') ).toHaveStyle('cursor: pointer')
        expect( getByTestId('desc') ).toHaveStyle('cursor: pointer')
    })

    it ('More Results button disappears for a while after it is clicked', async () => {
        const { getByTestId } = renderLaunchesAll();
        await waitForDomChange();
        const moreBtn = getByTestId('more');
        expect( moreBtn ).toHaveStyle('display: block');
        
        act(() => {fireEvent.click( moreBtn )});
        expect( moreBtn ).toHaveStyle('display: none');
        
        await waitForDomChange();
        await waitForDomChange();
        expect( moreBtn ).toHaveStyle('display: block');
    })
})