import {
    StyleSheet,
  } from 'react-native';
  import colors from '../../res/colors'
  
  export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:40,
        borderColor: colors.defaultRed,
        borderWidth:1,
        margin:10,
        borderRadius:5,
        padding:5
    }
  });