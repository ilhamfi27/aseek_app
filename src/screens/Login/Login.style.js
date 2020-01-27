import {
    StyleSheet, 
    images,
  } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#B30000',
  },
  images:{
    marginTop:1000,
    
  },
  useruse:{
    marginTop:10,
    width:"100%",
    height:"80%",
  },
  submitText:{
    marginTop:5,
    fontSize: 16,
    paddingTop:20,
    paddingBottom:20,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#b30000',
    borderRadius: 10,
    borderWidth: 1,
  },
  userInput: {
    marginTop:4,
    height:60,
    borderColor:'black',
    borderWidth: 1,
    borderRadius:8,
    backgroundColor:'#b30000',
    color:'#ffffff',
    fontSize: 16,
    paddingLeft: 15
  },
});