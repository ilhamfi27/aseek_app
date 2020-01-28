import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from './colors'

const screenHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: colors.white,
  },
  defaultBody: {
    backgroundColor: colors.white,
    padding: 20,
    flex: 3,
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    height: screenHeight,
  },
  redBody: {
    backgroundColor: colors.homeRed,
    padding: 20,
    flex: 3,
    flexDirection: 'row',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    height: screenHeight,
  },
});
