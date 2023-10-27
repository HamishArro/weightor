import {StyleSheet} from 'react-native';

export const colors = {
  grey: '#dbdbdb',
  white: '#FFFFFF',
  black: '#000000',
  mintCream: '#F3F7F0',
  roseTaupe: '#8C5E58',
  amaranthPurple: '#A93F55',
  indianRed: '#F2545B',
  midnightGreen: '#003844',
};

const fontSizes = {
  xs: 12,
  s: 16,
  m: 20,
  l: 24,
  xl: 28,
};

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.mintCream,
  },
  container: {
    margin: 8,
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  stage: {
    padding: 8,
    backgroundColor: colors.grey,
    width: '100%',
  },
  setContainer: {
    backgroundColor: colors.mintCream,
  },
  text: {
    fontSize: fontSizes.xs,
    color: colors.black,
  },
  textInput: {
    backgroundColor: colors.mintCream,
    color: colors.midnightGreen,
    fontSize: fontSizes.s,
    marginBottom: 4,
  },
  title: {
    fontSize: fontSizes.m,
    color: colors.white,
  },
  titleContainer: {
    padding: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.midnightGreen,
  },
  headerContainer: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.mintCream,
  },
  headerTitle: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cell: {
    flex: 1,
    marginLeft: 8,
  },
  icon: {
    color: colors.black,
    paddingRight: 8,
  },
});
