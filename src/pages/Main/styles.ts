import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #fff;
  font-family: 'Orbitron-Bold';
  margin-left: 16px;
`;

export const Icon = styled(MaterialIcon)``;
