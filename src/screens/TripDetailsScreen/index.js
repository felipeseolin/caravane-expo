import React from 'react';
import { View, Text } from 'react-native';
import Title from '../../components/Title';
import styles from '../../components/Info/styles';
import LongText from '../../components/LongText';
import Info from '../../components/Info';
import Button from '../../components/Button';
import Screen from '../../components/Screen';
import TripItem from '../../components/TripItem';

const TripDetailsScreen = ({ navigation }) => {
  const { caravana } = navigation.state.params;

  return (
    <Screen>
      <Title>{caravana.title}</Title>

      <Text style={styles.title}>Descrição</Text>
      <LongText>
        {caravana.description}
      </LongText>

      <Info title="De">
        {caravana.fromPlace}
      </Info>
      <Info title="Para">
        {caravana.toPlace}
      </Info>
      <Info title="Data de partida">
        {caravana.exitDate}
      </Info>
      <Info title="Data de saida">
        {caravana.arriveDate}
      </Info>

      <Title>Viagens garantidas</Title>

      {
        caravana.passengers.map(passenger => (<TripItem key={passenger.id} passenger={passenger} onPress={() => navigation.navigate('CaravanaTripFormScreen', { caravana })} />))
      }

      <Button
        title="Garantir minha vaga"
        accessibilityLabel="Garantir minha vaga nesta caravana"
        onPress={() => navigation.navigate('CaravanaTripFormScreen', { caravana })}
      />
    </Screen>
  );
};

export default TripDetailsScreen;
