import {StyleSheet} from 'react-native';

import color from '../../styles/color';
import fontWeight from '../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: color.gray,
    borderRadius: 15,
    elevation: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    marginBottom: 8,
  },
  title: {
    fontWeight: fontWeight.semibold,
    fontSize: 20,
    color: color.blue,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: color.dark,
    marginBottom: 8,
  },
  city: {
    fontSize: 16,
    color: color.blue,
    marginBottom: 4,
  },
  date: {
    fontSize: 10,
    color: color.dark,
  },
});

export default styles;
