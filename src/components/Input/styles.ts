import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #0b6337;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #0b6337;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 20px;
  font-family: 'Orbitron-Regular';
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 16px;
`;
