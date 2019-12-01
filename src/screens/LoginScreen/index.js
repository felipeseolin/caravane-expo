import React from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Screen from '../../components/Screen';
import ButtonAndLoader from '../../components/ButtonAndLoader';
import { processLogin } from '../../actions';
import messageByErrorCode from '../../util/messageByErrorCode';

import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    };
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor
    });
  }

  renderMessage() {
    const { message } = this.state;

    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  processLogin() {
    this.setState({ isLoading: true });
    const { email, password } = this.state;

    this.props
      .processLogin({ email, password })
      .then(user => {
        if (user) {
          this.props.navigation.goBack();
        } else {
          this.setState({
            isLoading: false,
            message: '',
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: messageByErrorCode(error.code)
        });
      });
  }

  render() {
    const {email, password} = this.state;
    return (
      <Screen>
        <Title>Entrar</Title>
        <View>
          <Input
            label="E-mail"
            autoCompleteType="email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(value) => {
              this.onChangeHandler('email', value);
            }}
            value={email}
          />
          <Input
            label="Senha"
            secureTextEntry
            onChangeText={(value) => {
              this.onChangeHandler('password', value);
            }}
            value={password}
          />
          <ButtonAndLoader
            title="Entrar"
            accessibilityLabel="Fazer login no aplicativo"
            buttonColor="blue"
            textColor="white"
            onPress={() => this.processLogin()}
            isLoading={this.state.isLoading}
          />
        </View>
        {this.renderMessage()}
      </Screen>
    );
  }
}

export default connect(null, { processLogin })(LoginScreen);
