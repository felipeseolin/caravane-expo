import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Info = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.text}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </View>
);

export default Info;
