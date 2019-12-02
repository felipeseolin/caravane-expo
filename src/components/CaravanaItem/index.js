import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LongText from '../LongText';
import styles from './styles';

const CaravanaItem = ({ caravana, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View>
      <Text style={styles.title}>{caravana.title}</Text>
    </View>
    <View>
      <Text style={styles.city}>{caravana.fromPlace} > {caravana.toPlace}</Text>
    </View>
    <LongText style={styles.description}>{caravana.description}</LongText>
    <Text style={styles.date}>{caravana.exitDate} - {caravana.arriveDate}</Text>
  </TouchableOpacity>
);

export default CaravanaItem;
