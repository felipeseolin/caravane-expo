import {StyleSheet} from 'react-native';

import fontWeight from '../../styles/fontWeight';
import color from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  title: {
    fontWeight: fontWeight.medium,
    fontSize: 18,
    color: color.dark,
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: color.dark,
  },
});

export default styles;
