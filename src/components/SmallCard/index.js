import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default function SmallCard({ title, description, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
                            'https://www.viajali.com.br/wp-content/uploads/2018/01/praia-do-gunga-1-730x730.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
