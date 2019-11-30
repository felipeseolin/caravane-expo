/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Title from '../../components/Title/Title';
import Section from '../../components/Section/Section';
import Circle from '../../components/Circle/Circle';
import SmallCard from '../../components/SmallCard/SmallCard';

// import styles from './styles.js';
import general from '../../styles/general.js';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={general.container}>

        <Title>Caravane</Title>
        <Text>Encontre a caravana perfeita para você!</Text>

        <Section title="Categorias" description="Escolha através da categoria que você mais se encaixa">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Circle text="Praia" />
            <Circle text="Praia" />
            <Circle text="Praia" />
          </ScrollView>
        </Section>

        <Section title="As mais procuradas" description="As caravanas mais procuradas">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SmallCard title="Teste" description="descricao" image="" />
            <SmallCard title="Teste" description="descricao" image="" />
            <SmallCard title="Teste" description="descricao" image="" />
            <SmallCard title="Teste" description="descricao" image="" />
          </ScrollView>
        </Section>
      </View>
    );
  }
}
