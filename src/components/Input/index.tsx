/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} color="#fff" size={26} />
      <TextInput name={name} placeholderTextColor="#fff" {...rest} />
    </Container>
  );
};

export default Input;
