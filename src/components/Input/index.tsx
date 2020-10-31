/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';

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
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      testID={`input-${name}`}
    >
      <Icon
        name={icon}
        color={isFocused || isFilled ? '#e6eed6' : '#aab0a7'}
        size={26}
        testID={`input-${name}-icon`}
      />
      <TextInput
        {...rest}
        onFocus={handleInputFocus}
        onEndEditing={e => handleInputBlur(e.nativeEvent.text)}
      />
    </Container>
  );
};

export default Input;
