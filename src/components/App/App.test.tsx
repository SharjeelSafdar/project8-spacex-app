import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { mockedResponses } from '../../api/mockedResponses';

const renderApp = () => render(
	<MockedProvider mocks={mockedResponses} addTypename={false}>
		<App />
	</MockedProvider>
);

describe('Tests for <App /> component', () => {
	afterEach(cleanup);

	test('renders without crashing', () => {
		renderApp();
	});
});
