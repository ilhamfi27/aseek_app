import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.homeRed,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    paddingBottom: 3,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  komponenBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  komponenText: {
    fontSize: 14,
  },
  nilaiAkhir: {
    fontWeight: 'bold',
  }
});
