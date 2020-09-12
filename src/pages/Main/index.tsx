import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';

import Input from '../../components/Input';

import { Container, Title, TitleContainer, Icon } from './styles';

const Main: React.FC = () => {
  const [rest, setRest] = useState('');
  const [occupation, setOccupation] = useState('');
  const [batches, setBatches] = useState('');

  return (
    <Container>
      <TitleContainer>
        <Icon name="sprout" color="#fff" size={45} />
        <Title>PIQUETEAR</Title>
      </TitleContainer>
      <Input
        name="rest"
        icon="calendar-range"
        placeholder="Dias de descanso"
        value={rest}
        onChangeText={text => setRest(text)}
      />
      <Input
        name="occupation"
        icon="calendar-clock"
        placeholder="Dias de ocupação"
        value={occupation}
        onChangeText={text => setOccupation(text)}
      />
      <Input
        name="batches"
        icon="cow"
        placeholder="Lotes de animais"
        value={batches}
        onChangeText={text => setBatches(text)}
      />
      <Button title="Calcular" />
    </Container>
  );
};

export default Main;
