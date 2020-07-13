import { render } from '@testing-library/react';
import React from 'react';
import ANXAddEvetnModal from './ANXAddEvetnModal';

describe('ANXAddEvetnModal', () => {
  const defaultProps = {};

  it('should render', () => {
    const props = {...defaultProps};
    const { asFragment, queryByText } = render(<ANXAddEvetnModal {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('ANXAddEvetnModal')).toBeTruthy();
  });
});
