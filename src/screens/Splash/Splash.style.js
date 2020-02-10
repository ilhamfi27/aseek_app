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
  userImage:{
    marginTop:230,
    marginLeft:100,
    width:200,
    height:200,
    resizeMode:'center'
    // backgroundColor: colors.defaultRed 
  }
});