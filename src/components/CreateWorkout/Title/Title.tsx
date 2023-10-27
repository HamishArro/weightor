import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {Text, View} from 'react-native';
import {styles} from '../../../utils/styleSheet';
import {TitleProps} from '../types';

function Title({title, handleBack}: TitleProps) {
  return (
    <View style={styles.titleContainer} testID={'title-container'}>
      <Text children={title} style={styles.title} />
      <AntDesign
        name="back"
        testID="back-button"
        onPress={handleBack}
        size={20}
        color="white"
      />
    </View>
  );
}

export default Title;
