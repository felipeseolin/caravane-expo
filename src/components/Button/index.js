import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

import color from '../../styles/color';

const Button = ({
  title, buttonColor = color.blue, textColor = color.white, accessibilityLabel, onPress,
}) => (
  <View style={styles.container}>
    <TouchableHighlight
      accessibilityLabel={accessibilityLabel}
      underlayColor={textColor}
      onPress={() => onPress()}
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      <Text style={[styles.buttonText, { color: textColor, borderColor: textColor }]}>{title}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;
