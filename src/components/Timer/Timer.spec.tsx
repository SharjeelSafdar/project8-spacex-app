import React from 'react';
import { render, cleanup, waitForDomChange } from '@testing-library/react';
import { Timer } from './Timer';

describe ('Tests for <Timer /> component', () => {
    afterEach(cleanup);

    it ('Renders correctly', () => {
        const { getByText } = render(<Timer secondsLeft={0} />);

        expect( getByText(/days/i) ).toBeInTheDocument();
        expect( getByText(/hours/i) ).toBeInTheDocument();
        expect( getByText(/minutes/i) ).toBeInTheDocument();
        expect( getByText(/seconds/i) ).toBeInTheDocument();
    })

    it ('Displays 00 days, hours, minutes and seconds if 0 is passed', () => {
        const { getByTestId } = render(<Timer secondsLeft={0} />);

        const days = getByTestId('days');
        const hours = getByTestId('hours');
        const minutes = getByTestId('minutes');
        const seconds = getByTestId('seconds');

        expect( days ).toHaveTextContent('00');
        expect( hours ).toHaveTextContent('00');
        expect( minutes ).toHaveTextContent('00');
        expect( seconds ).toHaveTextContent('00');
    })

    it ('Displays 02 days, 07 hours, 33 minutes and 20 seconds if 200k seconds are passed', () => {
        const { getByTestId } = render(<Timer secondsLeft={200000} />);

        const days = getByTestId('days');
        const hours = getByTestId('hours');
        const minutes = getByTestId('minutes');
        const seconds = getByTestId('seconds');

        expect( days ).toHaveTextContent('02');
        expect( hours ).toHaveTextContent('07');
        expect( minutes ).toHaveTextContent('33');
        expect( seconds ).toHaveTextContent('20');
    })

    it ('Timer countdowns correctly', async () => {
        const { getByTestId } = render(<Timer secondsLeft={2} />);

        const days = getByTestId('days');
        const hours = getByTestId('hours');
        const minutes = getByTestId('minutes');
        const seconds = getByTestId('seconds');
        
        expect( days ).toHaveTextContent('00');
        expect( hours ).toHaveTextContent('00');
        expect( minutes ).toHaveTextContent('00');
        expect( seconds ).toHaveTextContent('02');

        await waitForDomChange();

        expect( days ).toHaveTextContent('00');
        expect( hours ).toHaveTextContent('00');
        expect( minutes ).toHaveTextContent('00');
        expect( seconds ).toHaveTextContent('01');

        await waitForDomChange();

        expect( days ).toHaveTextContent('00');
        expect( hours ).toHaveTextContent('00');
        expect( minutes ).toHaveTextContent('00');
        expect( seconds ).toHaveTextContent('00');
    })
})