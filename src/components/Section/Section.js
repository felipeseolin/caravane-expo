import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Section = ({ title, description, children }) => (
  <View style={styles.container}>
    {
      title
        ? (<Text style={styles.title}>{title}</Text>)
        : <View />
    }
    {
      description
        ? (<Text style={styles.description}>{description}</Text>)
        : <View />
    }
    <View>
      {children}
    </View>
  </View>
);

export default Section;
