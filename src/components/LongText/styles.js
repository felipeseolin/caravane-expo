import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    flex: 1,
    textDecorationLine: 'underline',
    paddingBottom: 6,
  },
  content: {
    flex: 3,
  },
  collapsed: {
    maxHeight: 60,
  },
  expanded: {
    flex: 1,
  },
});

export default styles;
