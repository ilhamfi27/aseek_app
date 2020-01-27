import {
  StyleSheet,
} from 'react-native';
import colors from '../../res/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
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
  homeMenusBody: {
    backgroundColor: colors.white,
    padding: 20,
    flex: 3,
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  footer: {
    height: '10%',
    width: '100%',
    backgroundColor: colors.homeRed,
  }
});