import React from 'react';
import firebase from 'firebase';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { watchCaravanas } from '../../actions';
import Title from '../../components/Title';
import CaravanaItem from '../../components/CaravanaItem';
import Screen from '../../components/Screen';
import Button from '../../components/Button';
import NeedLogin from '../../components/NeedLoginScreen';

class MyCaravanasScreen extends React.Component {
  componentWillMount() {
    this.props.watchCaravanas();
  }

  renderButtonNewCaravana() {
    const { navigation } = this.props;
    return (
      <Button
        title="Nova Caravana"
        accessibilityLabel="Cadastrar nova caravana"
        onPress={() => navigation.navigate('CaravanaFormScreen')}
      />
    );
  }

  render() {
    const { myCaravanas, navigation, user } = this.props;

    if (!user) {
      return <NeedLogin navigation={navigation}/>;
    }


    if (myCaravanas == null) {
      return (
        <View>
          {this.renderButtonNewCaravana()}
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <Screen>
        <Title>Minhas caravanas</Title>
        {this.renderButtonNewCaravana()}
        <FlatList
          data={myCaravanas}
          renderItem={({ item }) => <CaravanaItem caravana={item} onPress={() => {
            navigation.navigate('CaravanaFormScreen', { caravana: item });
          }}/>}
          keyExtractor={(item) => item.id}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { listMyCaravanas, user } = state;
  const { currentUser } = firebase.auth();

  if (listMyCaravanas === null) {
    return {
      myCaravanas: listMyCaravanas,
      user
    };
  }

  const keys = Object.keys(listMyCaravanas);
  const listMyCaravanasWithId = keys.map((key) => {
    let passengersWithId = [];
    if (listMyCaravanas[key].passengers) {
      const { passengers } = listMyCaravanas[key];
      const keysPassengers = Object.keys(passengers);
      passengersWithId = keysPassengers.map((keyPassenger) => {
        return {
          ...passengers[keyPassenger],
          id: keyPassenger
        };
      });
    }

    return {
      ...listMyCaravanas[key],
      id: key,
      passengers: passengersWithId
    };
  });

  return {
    myCaravanas: listMyCaravanasWithId,
    user
  };
};

export default connect(mapStateToProps, { watchCaravanas })(MyCaravanasScreen);
