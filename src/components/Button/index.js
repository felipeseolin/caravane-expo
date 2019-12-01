import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const Button = ({
  title, buttonColor, textColor, accessibilityLabel, onPress,
}) => (
  <View style={styles.container}>
    <TouchableHighlight
      accessibilityLabel={accessibilityLabel}
      underlayColor={textColor}
      onPress={() => onPress()}
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;
