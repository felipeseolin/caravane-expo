import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Circle = ({ image, text }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      
    />
    <Text style={styles.text}>{ text }</Text>
  </View>
);

export default Circle;
