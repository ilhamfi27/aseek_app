import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  body: {
    width: '100%', 
    alignContent: 'flex-start',
    justifyContent: 'center',
  },
  picker:{
    height: 50, 
    width: '60%'
  },
  buttonBox: {
    backgroundColor: colors.white,
    marginTop: 10,
    width: '100%',
  }
});