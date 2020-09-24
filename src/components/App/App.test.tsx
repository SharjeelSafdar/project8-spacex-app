import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render, fireEvent, waitForDomChange } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { mockedResponses } from '../../api/mockedResponses';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = (path?: string) => render(
	<MockedProvider mocks={mockedResponses} addTypename={false}>
		<MemoryRouter initialEntries={!!path ? [path] : undefined}>
			<App />
		</MemoryRouter>
	</MockedProvider>
);

describe('Tests for <App /> component', () => {
	afterEach(cleanup);

	test('Renders without crashing', () => {
		renderApp();
	});

	test('Initially displays <Home /> component', () => {
		const { getByTestId } = renderApp();
		expect( getByTestId('header') ).toBeInTheDocument();
		expect( getByTestId('home-page') ).toBeInTheDocument();
		expect( getByTestId('footer') ).toBeInTheDocument();
	})

	test('Path to <LaunchesAll /> component is working correctly', () => {
		const { getByTestId } = renderApp('/launches-all');
		expect( getByTestId('launches-all-page') ).toBeInTheDocument();
	})

	test('Path to <Rockets /> component is working correctly', () => {
		const { getByTestId } = renderApp('/rockets');
		expect( getByTestId('rockets-page') ).toBeInTheDocument();
	})

	test('Path to <History /> component is working correctly', () => {
		const { getByTestId } = renderApp('/history');
		expect( getByTestId('history-page') ).toBeInTheDocument();
	})

	test('Path to <About /> component is working correctly', () => {
		const { getByTestId } = renderApp('/about');
		expect( getByTestId('about-page') ).toBeInTheDocument();
	})

	test('Link to <LaunchesAll /> page in <Header /> page works correctly', () => {
		const { getByTestId } = renderApp();
		act(() => {
			const allLaunchesLink = getByTestId('launches-link');
			fireEvent.click(allLaunchesLink);
		});
		expect( getByTestId('launches-all-page') ).toBeInTheDocument();
	})

	test('Path to <LaunchDetails /> component is working correctly', () => {
		const { getByTestId } = renderApp('/launches-all/101');
		expect( getByTestId('launch-details-page') ).toBeInTheDocument();
	})

	test('Link to <Home /> page in <Header /> works correctly', () => {
		const { getByTestId } = renderApp();

		// First go to All Launches page
		act(() => {
			const allLaunchesLink = getByTestId('launches-link');
			fireEvent.click(allLaunchesLink);
		});
		expect( getByTestId('launches-all-page') ).toBeInTheDocument();

		// Now, back to home page
		act(() => {
			const homeLink = getByTestId('home-link');
			fireEvent.click(homeLink);
		});
		expect( getByTestId('home-page') ).toBeInTheDocument();
	})

	test('Link to <Rockets /> page in <Header /> works correctly', () => {
		const { getByTestId } = renderApp();
		act(() => {
			const rocketsLink = getByTestId('rockets-link');
			fireEvent.click(rocketsLink);
		});
		expect( getByTestId('rockets-page') ).toBeInTheDocument();
	})

	test('Path to <RocketDetails /> component is working correctly', () => {
		const { getByTestId } = renderApp('/rockets/falconheavy');
		expect( getByTestId('rocket-details-page') ).toBeInTheDocument();
	})

	test('Link to <History /> page in <Header /> works correctly', () => {
		const { getByTestId } = renderApp();
		act(() => {
			const historyLink = getByTestId('history-link');
			fireEvent.click(historyLink);
		});
		expect( getByTestId('history-page') ).toBeInTheDocument();
	})

	test('Link to <About /> page in <Header /> works correctly', () => {
		const { getByTestId } = renderApp();
		act(() => {
			const aboutLink = getByTestId('about-link');
			fireEvent.click(aboutLink);
		});
		expect( getByTestId('about-page') ).toBeInTheDocument();
	})

	test('Navigation links in <Footer /> work correctly', () => {
		const { getByTestId } = renderApp();
		expect( getByTestId('home-page') ).toBeInTheDocument();
		
		act( () => fireEvent.click(getByTestId('launches')) );
		expect( getByTestId('launches-all-page') ).toBeInTheDocument();

		act( () => fireEvent.click(getByTestId('rockets')) );
		expect( getByTestId('rockets-page') ).toBeInTheDocument();

		act( () => fireEvent.click(getByTestId('history')) );
		expect( getByTestId('history-page') ).toBeInTheDocument();

		act( () => fireEvent.click(getByTestId('about')) );
		expect( getByTestId('about-page') ).toBeInTheDocument();

		act( () => fireEvent.click(getByTestId('home')) );
		expect( getByTestId('home-page') ).toBeInTheDocument();
	})

	test('Links to <LaunchDetails /> in <LaunchesAll /> work correctly', async () => {
		const { getAllByTestId, getByTestId, getByText } = renderApp();
		act( () => fireEvent.click(getByTestId('launches')) )
		await waitForDomChange();
		
		const moreBtns = getAllByTestId('more-details');
		act( () => fireEvent.click(moreBtns[0]) );
		expect( getByTestId('launch-details-page') ).toBeInTheDocument();
		await waitForDomChange();
		expect( getByText('Flight #1') ).toBeInTheDocument();
	})

	test('2. Links to <LaunchDetails /> in <LaunchesAll /> work correctly', async () => {
		const { getAllByTestId, getByTestId, getByText } = renderApp();
		act( () => fireEvent.click(getByTestId('launches-link')) )
		await waitForDomChange();
		act( () => fireEvent.click(getByTestId('past')) );
		await waitForDomChange();
		
		const moreBtns = getAllByTestId('more-details');
		act( () => fireEvent.click(moreBtns[1]) );
		expect( getByTestId('launch-details-page') ).toBeInTheDocument();
		await waitForDomChange();
		expect( getByText('Flight #101') ).toBeInTheDocument();
	})
	
	test('Links to <RocketDetails /> in <Rockets /> work correctly', async () => {
		const { getAllByTestId, getByTestId, getByText } = renderApp();
		act( () => fireEvent.click(getByTestId('rockets-link')) )
		await waitForDomChange();
		
		const moreBtns = getAllByTestId('more-rocket-details');
		act( () => fireEvent.click(moreBtns[1]) );
		expect( getByTestId('rocket-details-page') ).toBeInTheDocument();
		await waitForDomChange();
		expect( getByText('Falcon 9') ).toBeInTheDocument();
	})

	test('2. Links to <RocketDetails /> in <Rockets /> work correctly', async () => {
		const { getAllByTestId, getByTestId, getByText } = renderApp();
		act( () => fireEvent.click(getByTestId('rockets')) )
		await waitForDomChange();
		
		const moreBtns = getAllByTestId('more-rocket-details');
		act( () => fireEvent.click(moreBtns[3]) );
		expect( getByTestId('rocket-details-page') ).toBeInTheDocument();
		await waitForDomChange();
		expect( getByText('Starship') ).toBeInTheDocument();
	})
});
