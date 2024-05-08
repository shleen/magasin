import { StyleSheet } from 'react-native';

import { COLORS } from './constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',

    backgroundColor: COLORS.WHITE,
  },
  caption: {
    fontFamily: 'Arial',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 3,
  },
});
