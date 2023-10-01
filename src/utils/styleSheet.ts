import {StyleSheet} from 'react-native';

const colors = {
  grey: '#dbdbdb',
  mintCream: '#F3F7F0',
  roseTaupe: '#8C5E58',
  amaranthPurple: '#A93F55',
  indianRed: '#F2545B',
  midnightGreen: '#003844',
};

export const styles = StyleSheet.create({
  container: {
    margin: 32,
    alignItems: 'center',
  },
  stage: {
    backgroundColor: colors.grey,
    width: '100%',
  },
  setContainer: {
    backgroundColor: colors.mintCream,
  },
  text: {
    fontSize: 12,
  },
  textInput: {
    paddingBottom: 12,
  },
  title: {
    fontSize: 24,
    paddingBottom: 18,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '600',
  },
});
