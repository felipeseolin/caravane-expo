import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { userLogout } from '../../actions';

import Button from '../../components/Button';
import Screen from '../../components/Screen';
import Title from '../../components/Title';
import color from '../../styles/color';

class ProfileScreen extends Component {

  renderLoginLogoutButton() {
    const { user } = this.props;
    if (user === null) {
      return (
        <Button
          title="Fazer login"
          accessibilityLabel="Fazer login no sistema"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      );
    }

    return (
      <Button
        title="Sair"
        accessibilityLabel="Sair da minha conta"
        onPress={() => {
          userLogout();
          this.props.navigation.navigate('HomeScreen');
        }}
        buttonColor={color.red}
      />
    );
  }

  render() {
    const { user } = this.props;
    return (
      <Screen>
        <Title>{user && user.displayName ? user.displayName : 'Minha conta '}</Title>
        <Text>{user ? 'Usuario logado' : 'não logado'}</Text>
        { this.renderLoginLogoutButton() }

        <Button
          title="Acessar informações sobre o aplicativo"
          accessibilityLabel="Acessar informações sobre o aplicativo"
          onPress={() => this.props.navigation.navigate('AppInfoScreen')}
        />
      </Screen>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { userLogout })(ProfileScreen);
