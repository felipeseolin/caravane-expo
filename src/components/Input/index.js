import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Input = ({
  label,
  onChangeText = {},
  value = '',
  autoCompleteType = 'off',
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      autoCompleteType={autoCompleteType}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);

export default Input;
