import React, { useState } from 'react';

import { Text } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import CalculateNumberOfPaddocks from '../../utils/CalculateNumberOfPaddocks';

import { Container, Title, TitleContainer, Icon } from './styles';

const Main: React.FC = () => {
  const [rest, setRest] = useState('');
  const [occupation, setOccupation] = useState('');
  const [batches, setBatches] = useState('');
  const [paddocks, setPaddocks] = useState(0);

  const handleButtonPress = () => {
    setPaddocks(
      Math.round(
        CalculateNumberOfPaddocks(
          Number(rest),
          Number(occupation),
          Number(batches),
        ),
      ),
    );
  };

  return (
    <Container>
      <TitleContainer>
        <Icon name="sprout" color="#E6EED6" size={45} />
        <Title>PIQUETEAR</Title>
      </TitleContainer>
      <Input
        name="rest"
        icon="calendar-range"
        placeholder="Dias de descanso"
        keyboardType="numeric"
        value={rest}
        onChangeText={text => setRest(text)}
      />
      <Input
        name="occupation"
        icon="calendar-clock"
        placeholder="Dias de ocupação"
        keyboardType="numeric"
        value={occupation}
        onChangeText={text => setOccupation(text)}
      />
      <Input
        name="batches"
        icon="cow"
        placeholder="Lotes de animais"
        keyboardType="numeric"
        value={batches}
        onChangeText={text => setBatches(text)}
      />
      <Button onPress={handleButtonPress}>Calcular</Button>
      {paddocks > 0 && (
        <Title>
          {`Você vai precisar de ${paddocks.toString()} piquetes para sua pastagem obter ${rest} dias de decanso.`}
        </Title>
      )}
    </Container>
  );
};

export default Main;
