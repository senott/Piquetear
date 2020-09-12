import React from 'react';
import { Button } from 'react-native';

import Input from '../../components/Input';

import { Container, Title, TitleContainer, Icon } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Icon name="sprout" color="#fff" size={45} />
          <Title>PIQUETEAR</Title>
        </TitleContainer>
        <Input
          name="rest"
          icon="calendar-range"
          placeholder="Dias de descanso"
        />
        <Input
          name="occupation"
          icon="calendar-clock"
          placeholder="Dias de ocupação"
        />
        <Input name="batches" icon="cow" placeholder="Lotes de animais" />
        <Button title="Calcular" />
      </Container>
    </>
  );
};

export default Main;
