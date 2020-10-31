import { fireEvent, render, waitFor } from 'react-native-testing-library';
import React from 'react';
import 'jest-styled-components/native';

import Input from '../../components/Input';

describe('Input component', () => {
  it('should be able to render input', () => {
    const { getByPlaceholder } = render(
      <Input name="email" icon="mail" placeholder="E-mail" />,
    );

    expect(getByPlaceholder('E-mail')).toBeTruthy();
  });

  it('should be highlighted when focused and back to normal on blur', async () => {
    // const onBlurEvent = jest.fn();

    const { getByTestId, getByPlaceholder, debug } = render(
      <Input
        name="email"
        icon="mail"
        placeholder="E-mail"
        // onBlur={onBlurEvent}
      />,
    );

    const inputElement = getByPlaceholder('E-mail');
    const containerElement = getByTestId('input-email');

    fireEvent(inputElement, 'onFocus');

    await waitFor(() => {
      expect(containerElement).toHaveStyleRule('border-color', '#e6eed6');
    });

    fireEvent(inputElement, 'onEndEditing', { nativeEvent: { text: '' } });

    await waitFor(() => {
      expect(containerElement).not.toHaveStyleRule('border-color', '#e6eed6');
    });
  });

  it('should keep icon highlighted when filled', () => {
    const { getByTestId, getByPlaceholder } = render(
      <Input name="email" icon="mail" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholder('E-mail');

    // fireEvent.changeText(inputElement, 'johndoe@example.com');

    fireEvent(inputElement, 'onEndEditing', {
      nativeEvent: { text: 'johndoe@example.com' },
    });

    expect(getByTestId('input-email-icon')).toHaveStyleRule('color', '#e6eed6');
  });

  // TODO:
  // Property 'toHaveStyleRule' does not exist on type 'JestMatchersShape<Matchers<void, ReactTestInstance>, Matchers<Promise<void>, ReactTestInstance>>'
});
