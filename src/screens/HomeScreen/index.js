/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { watchAllCaravanas } from '../../actions';
import Title from '../../components/Title';
import Section from '../../components/Section';
import SmallCard from '../../components/SmallCard';
import Screen from '../../components/Screen';
import CaravanaItem from '../../components/CaravanaItem';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.watchAllCaravanas();
  }

  render() {
    const { allCaravanas, navigation } = this.props;
    if (allCaravanas == null) {
      return <ActivityIndicator/>;
    }

    return (
      <Screen>

        <Section description="As melhores caravanas você encontra aqui!">
          <FlatList
            data={allCaravanas}
            renderItem={({ item }) =>
              (
                <CaravanaItem
                  caravana={item}
                  onPress={() => {
                    navigation.navigate('CaravanaDetailsScreen', { caravana: item });
                  }}
                />
              )}
            keyExtractor={(item) => item.id}
            onEndReached={}
            onEndReachedThreshold={0}
          />
        </Section>

      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  const { listAllCaravanas } = state;

  if (listAllCaravanas === null) {
    return { allCaravanas: listAllCaravanas };
  }

  const keys = Object.keys(listAllCaravanas);
  const listAllCaravanasWithId = keys.map((key) => {
    return { ...listAllCaravanas[key], id: key };
  });

  return { allCaravanas: listAllCaravanasWithId };
};
export default connect(mapStateToProps, { watchAllCaravanas })(HomeScreen);
