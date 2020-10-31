import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';

import Main from '../../pages/Main';

describe('Main page', () => {
  it('should render the page', () => {
    const { getByText, getByPlaceholder } = render(<Main />);

    expect(getByPlaceholder('Dias de descanso')).toBeTruthy();
    expect(getByPlaceholder('Dias de ocupação')).toBeTruthy();
    expect(getByPlaceholder('Lotes de animais')).toBeTruthy();
    expect(getByText('Calcular')).toBeTruthy();
  });

  it('should calculate the number of paddocks', () => {
    const { getByText, getByPlaceholder } = render(<Main />);

    const restInput = getByPlaceholder('Dias de descanso');
    const occupationInput = getByPlaceholder('Dias de ocupação');
    const batchesInput = getByPlaceholder('Lotes de animais');
    const calculateButton = getByText('Calcular');

    fireEvent.changeText(restInput, '42');
    fireEvent.changeText(occupationInput, '2');
    fireEvent.changeText(batchesInput, '1');
    fireEvent.press(calculateButton);

    expect(
      getByText('Construa 22 piquetes para sua pastagem descansar 42 dias.'),
    ).toBeTruthy();
  });
});
