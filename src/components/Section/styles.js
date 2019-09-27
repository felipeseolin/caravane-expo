import { StyleSheet } from 'react-native';

import weight from '../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: weight.regular,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: weight.light,
    marginBottom: 8,
  },
});

export default styles;
