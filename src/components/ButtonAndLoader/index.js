import React from 'react';
import { View, Text, ActivityIndicator, TouchableHighlight } from 'react-native';

import styles from './styles';

const ButtonAndLoader = ({ title, buttonColor, textColor, accessibilityLabel, onPress, isLoading }) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        title={title}
        accessibilityLabel={accessibilityLabel}
        underlayColor={textColor}
        onPress={() => onPress()}
        style={[styles.button, { backgroundColor: buttonColor }]}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonAndLoader;
