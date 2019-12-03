import React from 'react';
import { Text, FlatList } from 'react-native';

import Screen from '../../components/Screen';
import Title from '../../components/Title';
import TripItem from '../../components/TripItem';

const PassengersScreen = ({ navigation }) => {
  const { passengers } = navigation.state.params;

  return (
    <Screen>
      <Title>Viagens garantidas</Title>

      {
        passengers ?
          <FlatList
            data={passengers}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              (
                <TripItem
                  key={item.id}
                  passenger={item}
                />
              )}
            keyExtractor={(item) => item.id}
          />
          : <Text>Ainda não há passageiros cadastrados</Text>
      }
    </Screen>
  );
};

export default PassengersScreen;
