import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  body: {
    flex: 1, 
    flexDirection: 'column', 
    width: '100%', 
    alignContent: 'center'
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