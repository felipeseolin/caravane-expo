import React, { Component } from 'react';

import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Button
          title="Fazer login"
          color="blue"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}
