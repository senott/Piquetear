/* eslint-disable camelcase */
import React from 'react';
import { Text } from 'react-native';
import { render } from 'react-native-testing-library';

import WavyFooter from '../../components/WavyFooter';

describe('Wavy footer component', () => {
  it('should render a wavy footer', () => {
    const { getByText } = render(
      <WavyFooter>
        <Text>Example text.</Text>
      </WavyFooter>,
    );

    expect(getByText('Example text.')).toBeTruthy();
  });
});
