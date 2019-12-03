import React from 'react';
import firebase from 'firebase';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { watchTrips } from '../../actions';
import Title from '../../components/Title';
import CaravanaItem from '../../components/CaravanaItem';
import Screen from '../../components/Screen';
import Button from '../../components/Button';

class MyTripsScreen extends React.Component {
  componentWillMount() {
    this.props.watchTrips();
  }

  render() {
    const { myCaravanas, navigation } = this.props;
    if (myCaravanas == null) {
      return (
        <View>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <Screen>
        <Title>Minhas viagens</Title>
        <FlatList
          data={myCaravanas}
          renderItem={({ item }) => <CaravanaItem caravana={item} onPress={() => {
            navigation.navigate('TripDetailsScreen', { caravana: item });
          }} />}
          keyExtractor={(item) => item.id}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { listMyTrips } = state;
  const { currentUser } = firebase.auth();

  if (listMyTrips === null) {
    return { myCaravanas: listMyTrips };
  }

  const keys = Object.keys(listMyTrips);
  const listMyTripsWithId = keys.map((key) => {

    let passengersWithId = [];
    if (listMyTrips[key].passengers) {
      const { passengers } = listMyTrips[key];
      const keysPassengers = Object.keys(passengers);
      passengersWithId = keysPassengers.map((keyPassenger) => {
        return {
          ...passengers[keyPassenger],
          id: key
        };
      });
    }

    return {
      ...listMyTrips[key],
      id: key,
      passengers: passengersWithId
    };
  });

  let filter = [];
  listMyTripsWithId.forEach((caravana) => {
    if (caravana.passengers) {
      const { passengers } = caravana;
      for (let i = 0; i < passengers.length; i++) {
        const passenger = passengers[i];
        if (passenger.userId === currentUser.uid) {
          filter.push(caravana);
          break;
        }
      }
    }
  });

  return { myCaravanas: filter };
};

export default connect(mapStateToProps, { watchTrips })(MyTripsScreen);
