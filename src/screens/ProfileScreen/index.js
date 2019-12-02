import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { userLogout } from '../../actions';

import Button from '../../components/Button';
import Screen from '../../components/Screen';
import Title from '../../components/Title';
import color from '../../styles/color';
import styles from './styles';

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
    const { user, navigation } = this.props;
    return (
      <Screen>

        <View style={styles.userIconContainer}>
          <Image
            source={{ uri: 'https://image.flaticon.com/icons/png/512/44/44948.png' }}
            style={styles.userIcon}
          />
        </View>

        {
          user == null
            ? (<View/>) :
            (<Button title="Minhas caravanas" accessibilityLabel="Minhas caravanas" onPress={() => {
              navigation.navigate('MyCaravanasScreen');
            }}/>)
        }

        {this.renderLoginLogoutButton()}

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
