import React from 'react';
import { View, Alert, Text, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { setFieldTrip, resetFormTrip, saveTrip, deleteTrip, setAllFieldsTrip } from '../../actions';

import Screen from '../../components/Screen';
import Title from '../../components/Title';
import Input from '../../components/Input';
import ButtonAndLoader from '../../components/ButtonAndLoader';

import color from '../../styles/color';

class CaravanaTripFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isEdit: false,
    };
  }

  componentDidMount() {
    const { navigation, setAllFields, resetFormTrip } = this.props;
    const { params } = navigation.state;

    if (params && params.trip) {
      setAllFields(params.trip);
      this.setState({ isEdit: true });
    } else {
      resetFormTrip();
    }
  }

  renderDeleteButton() {
    const { isEdit } = this.state;
    // It's a insert
    if (!isEdit) {
      return <View/>;
    }

    const { deleteTrip, navigation } = this.props;
    const { trip } = navigation.state.params;

    return (
      <ButtonAndLoader
        title="Excluir viagem"
        isLoading={false}
        buttonColor={color.red}
        accessibilityLabel="Excluir esta viagem"
        onPress={async () => {
          this.setState({ isLoading: true });
          const hasDeleted = await deleteTrip(trip);
          this.setState({ isLoading: false });
          if (hasDeleted) {
            navigation.goBack();
          }
        }}
      />
    );

  }

  render() {
    const { isLoading } = this.state;
    const { tripForm, setFieldTrip, saveTrip, navigation } = this.props;
    const { caravana } = navigation.state.params;
    return (
      <Screen>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            width: '100%'
          }}
          behavior='padding'
          enabled
        >
          <Title>Nova viagem</Title>
          <View>
            <Input
              label="Nome completo do passageiro(a)"
              placeholder="John Doe"
              value={tripForm.passenger}
              onChangeText={(value) => setFieldTrip('passenger', value)}
            />
            <Input
              label="CPF"
              placeholder="xxx.xxx.xxx-xx"
              value={tripForm.cpf}
              onChangeText={(value) => setFieldTrip('cpf', value)}
            />
            <Input
              label="Data de nascimento"
              placeholder="01/01/2000"
              value={tripForm.birth}
              onChangeText={(value) => setFieldTrip('birth', value)}
            />
          </View>
          <ButtonAndLoader
            title="Salvar"
            accessibilityLabel="Garantir meu lugar"
            isLoading={isLoading}
            onPress={async () => {
              this.setState({ isLoading: true });
              try {
                await saveTrip(tripForm, caravana);
                navigation.goBack();
              } catch (e) {
                Alert.alert('Erro ao salvar', e.message);
              } finally {
                this.setState({ isLoading: false });
              }
            }}
          />

          {this.renderDeleteButton()}
        </KeyboardAvoidingView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return { tripForm: state.tripForm };
};

const mapDispatchToProps = {
  setFieldTrip,
  resetFormTrip,
  saveTrip,
  setAllFieldsTrip,
  deleteTrip
};


export default connect(mapStateToProps, mapDispatchToProps)(CaravanaTripFormScreen);
