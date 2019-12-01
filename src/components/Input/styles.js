import { StyleSheet } from 'react-native';

import color from '../../styles/color';
import weight from '../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  label: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: weight.light,
  },
  input: {
    borderWidth: 1,
    borderBottomColor: color.dark,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 5,
    elevation: 2,
  },
});

export default styles;
