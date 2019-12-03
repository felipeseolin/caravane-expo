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
  const { caravana, user } = navigation.state.params;

  return (
    <Screen>
      <Title>Viagens garantidas</Title>

      {
        caravana.passengers.map(passenger => (
          passenger.userId === user.uid ?
            (<TripItem
              key={passenger.id}
              passenger={passenger}
              onPress={() => navigation.navigate('CaravanaTripFormScreen', {
                passenger,
                caravana
              })}/>)
            : null
        ))
      }

      <Button
        title="Detalhes da caravana"
        accessibilityLabel="Detalhes da caravana"
        onPress={() => navigation.navigate('CaravanaDetailsScreen', { caravana })}
      />
    </Screen>
  );
};

export default TripDetailsScreen;
