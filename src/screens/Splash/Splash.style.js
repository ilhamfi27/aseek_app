import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.defaultRed,
  }
});