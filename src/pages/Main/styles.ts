import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: #17a65e;
  justify-content: center;
`;

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
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
  color: #e6eed6;
  font-family: 'Orbitron-Bold';
  margin-left: 16px;
`;

export const Icon = styled(MaterialIcon)``;

export const ResultText = styled.Text`
  font-size: 30px;
  color: #e6eed6;
  font-family: 'Orbitron-Bold';
  margin-left: 16px;
`;
