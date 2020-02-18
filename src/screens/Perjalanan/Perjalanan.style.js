import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%'
  },
  input: {
    height: 40,
    borderColor: colors.defaultRed,
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5
  },
  scannerBox: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});