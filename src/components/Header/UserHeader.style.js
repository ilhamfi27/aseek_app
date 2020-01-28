import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  header: {
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
    backgroundColor: colors.homeRed,
    height: '20%',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  userInformation: {
    marginLeft: 30,
  },
  userInformationText: {
    color: colors.white,
  },
  usersName: {
    fontWeight: 'bold',
  },
});
