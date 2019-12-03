import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CaravanaItem = ({ passenger, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View>
      <Text style={styles.title}>{passenger.passenger}</Text>
    </View>
    <View>
      <Text style={styles.text}>{passenger.cpf}</Text>
    </View>
    <Text style={styles.text}>{passenger.birth}</Text>
  </TouchableOpacity>
);

export default CaravanaItem;
