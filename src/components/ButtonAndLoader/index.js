import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Button from '../Button';
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
      <Button
        title={title}
        accessibilityLabel={accessibilityLabel}
        underlayColor={textColor}
        onPress={() => onPress()}
        buttonColor={buttonColor}
        textColor={textColor}
      />
    </View>
  );
};

export default ButtonAndLoader;
