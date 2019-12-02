import React from 'react';
import firebase from 'firebase';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { watchCaravanas } from '../../actions';
import Title from '../../components/Title';
import CaravanaItem from '../../components/CaravanaItem';
import Screen from '../../components/Screen';
import Button from '../../components/Button';

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
    const { myCaravanas, navigation } = this.props;
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
  const { listMyCaravanas } = state;
  const { currentUser } = firebase.auth();

  if (listMyCaravanas === null) {
    return { myCaravanas: listMyCaravanas };
  }

  const keys = Object.keys(listMyCaravanas);
  const listMyCaravanasWithId = keys.map((key) => {
    return { ...listMyCaravanas[key], id: key };
  });

  const filteredMyCaravanas = listMyCaravanasWithId.filter(
    (caravana) => caravana.userId === currentUser.uid);

  return { myCaravanas: filteredMyCaravanas };
};

export default connect(mapStateToProps, { watchCaravanas })(MyCaravanasScreen);
