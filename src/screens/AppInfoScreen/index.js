import React from 'react';
import { View, Text } from 'react-native';

import Screen from '../../components/Screen';
import Title from '../../components/Title';
import Info from '../../components/Info';
import styles from './styles';

const AppInfoScreen = () => (
  <Screen>
    <Title>Informações</Title>
    <View>
      <Info title="O que é caravane?">
        <Text>
          O caravane é um app de caravanas, onde é possível gerenciar caravanas
          e até mesmo ingressar em alguma.
        </Text>
      </Info>
      <Info title="Como funciona?">
        <Text>
          Ao acessar o app já é possível visualizar todas as caravanas
          cadastradas, de forma que ao fazer uma conta no app, é possível
          cadastrar um caravana sua e também ingressar em outras caravanas.
        </Text>
      </Info>
      <Info title="Como posso fazer uma conta?">
        <Text>
          Para fazer uma conta é muito simples! Basta adicionar o seu e-mail
          e uma senha de no mínimo seis caracteres. Para isto, faça o login
          e crie uma conta também.
        </Text>
      </Info>
      <Info title="Quem pode visualizar as caravanas cadastradas?">
        <Text>
          Qualquer um pode visualizar as caravanas cadastradas no sistema,
          de modo que qualquer um que esteja logado possa também ingressar
          em uma caravana.
        </Text>
      </Info>
      <Info title="Como posso ver quem ingressou em uma caravana?">
        <Text>
          Através da aba Usuário é possível visualizar as suas caravanas,
          após isto basta selecionar. Nesta tela, também é possível
          editar as informações da caravana e até mesmo exclui-la.
        </Text>
      </Info>
    </View>
    <View style={styles.rights}>
      <Text>Todos os direitos reservados a Felipe Seolin Bento</Text>
    </View>
  </Screen>
);

export default AppInfoScreen;
