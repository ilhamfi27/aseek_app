import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  reviewBox: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 10,
    marginTop: 10,
    height: 80,
    width: '60%'
  },
  reviewTextBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  reviewText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
