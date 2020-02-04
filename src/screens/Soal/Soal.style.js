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
  buttonBox: {
    backgroundColor: colors.white,
    marginTop: 10,
    width: '100%',
  },
  boxSoal: {
    width: '100%',
  },
  statusSoal: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  soalTerjawabText: {
    textTransform: 'uppercase', 
    fontSize: 16,
  },
  poinTerjawabText: {
    fontWeight: 'bold', 
    fontSize: 16,
  },
  boxTextSoal: {
    marginTop: 10,
  },
  textSoal: {
    fontSize: 12,
  }
});