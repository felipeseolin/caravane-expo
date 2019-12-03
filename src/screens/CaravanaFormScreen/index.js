import React from 'react';
import { View, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import { resetForm, setField, saveCaravana, setAllFields, deleteMyCaravana } from '../../actions';

import Screen from '../../components/Screen';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonAndLoader from '../../components/ButtonAndLoader';

import color from '../../styles/color';
import NeedLogin from '../../components/NeedLoginScreen';

class CaravanaFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isEdit: false
    };
  }

  componentDidMount() {
    const { navigation, setAllFields, resetForm } = this.props;
    const { params } = navigation.state;

    if (params && params.caravana) {
      setAllFields(params.caravana);
      this.setState({ isEdit: true });
    } else {
      resetForm();
    }
  }

  renderDeleteButton() {
    const { isEdit } = this.state;
    // It's a insert
    if (!isEdit) {
      return <View/>;
    }

    const { deleteMyCaravana, navigation } = this.props;
    const { caravana } = navigation.state.params;

    return (
      <ButtonAndLoader
        title="Excluir caravana"
        isLoading={false}
        buttonColor={color.red}
        accessibilityLabel="Excluir esta caravana"
        onPress={async () => {
          this.setState({ isLoading: true });
          const hasDeleted = await deleteMyCaravana(caravana);
          this.setState({ isLoading: false });
          if (hasDeleted) {
            navigation.goBack();
          }
        }}
      />
    );

  }

  renderPassengersButton() {
    const { isEdit } = this.state;
    // It's a insert
    if (!isEdit) {
      return <View/>;
    }

    const { navigation } = this.props;
    const { caravana } = navigation.state.params;
    console.log(caravana.passengers);
    return (
      <Button
        title="Visualizar passageiros"
        buttonColor={color.yellow}
        accessibilityLabel="Visualizar passageiros"
        onPress={() => navigation.navigate('PassengersScreen', { caravana, passengers: caravana.passengers })}
      />
    );

  }

  render() {
    const { isLoading } = this.state;
    const { caravanaForm, setField, saveCaravana, navigation, user } = this.props;

    if (!user) {
      return <NeedLogin navigation={navigation}/>;
    }


    return (
      <Screen>
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: 'center', width: '100%' }}
          behavior='padding'
          enabled
        >
          <Title>Nova caravana</Title>
          <View>
            <Input
              label="Título"
              placeholder="São José do Rio Preto + Aparecida do Norte"
              value={caravanaForm.title}
              onChangeText={(value) => setField('title', value)}
            />
            <Input
              label="Descrição"
              placeholder="Caravana muito legal e barata!"
              value={caravanaForm.description}
              onChangeText={(value) => setField('description', value)}
              multiline
              numberOfLines={8}
            />
            <Input
              label="Lugar de saida"
              placeholder="Cornélio Procópio-PR"
              value={caravanaForm.fromPlace}
              onChangeText={(value) => setField('fromPlace', value)}
            />
            <Input
              label="Lugar de destino"
              placeholder="Aparecida do Norte-SP"
              value={caravanaForm.toPlace}
              onChangeText={(value) => setField('toPlace', value)}
            />
            <Input
              label="Data de saida"
              placeholder="21/10/2020"
              value={caravanaForm.exitDate}
              onChangeText={(value) => setField('exitDate', value)}
            />
            <Input
              label="Data de chegada"
              placeholder="30/10/2020"
              value={caravanaForm.arriveDate}
              onChangeText={(value) => setField('arriveDate', value)}
            />
          </View>
          <ButtonAndLoader
            title="Salvar"
            accessibilityLabel="Salvar a caravana"
            isLoading={isLoading}
            onPress={async () => {
              this.setState({ isLoading: true });
              try {
                await saveCaravana(caravanaForm);
                navigation.goBack();
              } catch (e) {
                Alert.alert('Erro ao salvar', e.message);
              } finally {
                this.setState({ isLoading: false });
              }
            }}
          />
          { this.renderPassengersButton() }
          {this.renderDeleteButton()}
        </KeyboardAvoidingView>
      </Screen>
    );
  }
}

const mapStateToProps = (state) => {
  return { caravanaForm: state.caravanaForm, user: state.user };
};

const mapDispatchToProps = { setField, resetForm, saveCaravana, setAllFields, deleteMyCaravana };


export default connect(mapStateToProps, mapDispatchToProps)(CaravanaFormScreen);
