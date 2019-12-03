import React from 'react';
import {View, Text} from 'react-native';

import Title from '../Title';
import Button from '../Button';

const NeedLoginScreen = ({ navigation }) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Title style={{textAlign: 'center'}}>Para acessar esta página é necessário fazer login</Title>
    <Button
      title="Fazer login"
      onPress={() => navigation.navigate('LoginScreen')}
    />
  </View>
);

export default NeedLoginScreen;
