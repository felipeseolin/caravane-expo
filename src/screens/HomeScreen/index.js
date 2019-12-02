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

        <Section title="Categorias" description="Escolha através da categoria que você mais se encaixa">
          <FlatList
            data={allCaravanas}
            renderItem={({ item }) =>
              (
                <CaravanaItem
                  caravana={item}
                  onPress={() => {
                    navigation.navigate('ProfileScreen', { caravana: item });
                  }}
                />
              )}
            keyExtractor={(item) => item.id}
          />
        </Section>

        <Section title="As mais procuradas" description="As caravanas mais procuradas">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SmallCard title="Teste" description="descricao" image=""/>
            <SmallCard title="Teste" description="descricao" image=""/>
            <SmallCard title="Teste" description="descricao" image=""/>
            <SmallCard title="Teste" description="descricao" image=""/>
          </ScrollView>
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
