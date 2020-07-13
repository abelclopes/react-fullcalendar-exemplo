import { render } from '@testing-library/react';
import React from 'react';
import CustomCalendar from './CustomCalendar';

describe('CustomCalendar', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<CustomCalendar {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('CustomCalendar')).toBeTruthy();
    });
});
