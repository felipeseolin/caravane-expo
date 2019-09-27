import { StyleSheet } from 'react-native';

import color from '../../styles/color';
import weight from '../../styles/fontWeight';

const styles = StyleSheet.create({
  container: {
    height: 178,
    width: 100,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginRight: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    backgroundColor: color.light,
    elevation: 8,
  },
  imageContainer: {
    height: 100,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  textContainer: {
    margin: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: weight.semibold,
  },
  description: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: weight.light,
  },
});

export default styles;
