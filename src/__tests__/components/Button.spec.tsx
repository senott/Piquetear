import React from 'react';
import { render } from 'react-native-testing-library';

import Button from '../../components/Button';

describe('Button component', () => {
  it('should render a button', () => {
    const { getByText } = render(<Button>Ok</Button>);

    expect(getByText('Ok')).toBeTruthy();
  });
});
