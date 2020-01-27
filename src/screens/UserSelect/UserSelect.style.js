import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: '30%',
  },
  selectTextBody: {
    backgroundColor: colors.defaultRed,
    width: 300,
    height: 50,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectText: {
    color: colors.white,
    fontWeight: 'bold',

  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 70,
  }
});