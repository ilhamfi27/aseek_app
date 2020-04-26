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
      height: '100%',
    },
    input: {
      borderWidth: 1,
      backgroundColor: colors.white,
      width: 300,
      height: 50,
      borderRadius: 5,
      marginBottom: 5,
      borderColor: colors.ligthred,
      paddingLeft: 7,
    },
    selectText: {
      color: colors.white,
      fontWeight: 'bold',
  
    },
    logo: {
      width: 300,
      height: 100,
      marginBottom: 70,
    },
    buttonBox: {
      marginTop: 10,
      borderWidth: 1,
      backgroundColor: colors.defaultRed,
      width: '75%',
      height: 50,
      borderColor: colors.defaultRed,
      borderRadius: 5,
      marginBottom: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    invisButton:{
      flexWrap: 'wrap',
      alignContent: 'flex-start',
      flexDirection: 'row',
      flex: 3,
      paddingTop:10,
    },
    Dropdown:{
      borderWidth: 1,
      width: 400,
      height: 40,
      borderRadius: 5,
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });