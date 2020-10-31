import styled, { css } from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #003e1f;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #003e1f;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: #e6eed6;
    `}
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#aab0a7',
})`
  flex: 1;
  color: #e6eed6;
  font-size: 20px;
  font-family: 'Orbitron-Regular';
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 16px;
`;
