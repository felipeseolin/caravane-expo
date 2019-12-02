import React from 'react';
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

  render() {
    const { myCaravanas, navigation } = this.props;
    if (myCaravanas == null) {
      return <ActivityIndicator/>;
    }

    return (
      <Screen>
        <Title>Minhas caravanas</Title>
        <Button
          title="Nova Caravana"
          accessibilityLabel="Cadastrar nova caravana"
          onPress={() => navigation.navigate('CaravanaFormScreen')}
        />
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

  if (listMyCaravanas === null) {
    return { myCaravanas: listMyCaravanas };
  }

  const keys = Object.keys(listMyCaravanas);
  const listMyCaravanasWithId = keys.map((key) => {
    return { ...listMyCaravanas[key], id: key };
  });

  return { myCaravanas: listMyCaravanasWithId };
};

export default connect(mapStateToProps, { watchCaravanas })(MyCaravanasScreen);
