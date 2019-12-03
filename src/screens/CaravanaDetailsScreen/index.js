import React from 'react';
import { View, Text } from 'react-native';

import Screen from '../../components/Screen';
import Info from '../../components/Info';
import Title from '../../components/Title';
import LongText from '../../components/LongText';
import Button from '../../components/Button';
import styles from '../../components/Info/styles';

const CaravanaDetailsScreen = ({ navigation }) => {
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
      <Button
        title="Garantir minha vaga"
        accessibilityLabel="Garantir minha vaga nesta caravana"
        onPress={() => navigation.navigate('CaravanaTripFormScreen', { caravana })}
      />
    </Screen>
  );
};

export default CaravanaDetailsScreen;
