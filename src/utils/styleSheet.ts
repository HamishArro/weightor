import {StyleSheet} from 'react-native';

export const colors = {
  grey: '#dbdbdb',
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
    backgroundColor: colors.grey,
    width: '100%',
  },
  setContainer: {
    backgroundColor: colors.mintCream,
  },
  text: {
    fontSize: fontSizes.s,
  },
  textInput: {
    fontSize: fontSizes.s,
    paddingBottom: 12,
  },
  title: {
    fontSize: fontSizes.m,
    paddingBottom: 18,
  },
  headerContainer: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.mintCream,
  },
  headerTitle: {
    fontSize: fontSizes.xl,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cell: {
    flex: 1,
    margin: 10,
  },
});
