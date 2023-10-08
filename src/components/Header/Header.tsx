import React from 'react';
import {Text, View} from 'react-native';
import {HeaderProps} from './types';
import {styles, colors} from '../../utils/styleSheet';

function Header({title}: HeaderProps): JSX.Element {
  return (
    <View style={styles.headerContainer} testID="header-container">
      <Text
        testID="title"
        style={[
          styles.headerTitle,
          {
            color: colors.grey,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
