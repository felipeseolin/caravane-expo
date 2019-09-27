import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Circle = ({ image, text }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{ uri: 'https://www.viajali.com.br/wp-content/uploads/2018/01/praia-do-gunga-1-730x730.jpg' }}
    />
    <Text style={styles.text}>{ text }</Text>
  </View>
);

export default Circle;
