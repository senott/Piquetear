/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useRef, useState } from 'react';

import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(text => {
    setIsFocused(false);

    if (text !== '') {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <Icon
        name={icon}
        color={isFocused || isFilled ? '#fff' : '#aab0a7'}
        size={26}
      />
      <TextInput
        name={name}
        placeholderTextColor="#aab0a7"
        onFocus={handleInputFocus}
        onEndEditing={e => handleInputBlur(e.nativeEvent.text)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
