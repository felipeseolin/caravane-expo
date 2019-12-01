import { StyleSheet } from 'react-native';

import fontWeight from '../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: fontWeight.light,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default styles;
