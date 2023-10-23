import React from 'react';
import {Text, View} from 'react-native';
import {HeaderProps} from './types';
import {styles} from '../../utils/styleSheet';

function Header({title}: HeaderProps): JSX.Element {
  return (
    <View style={styles.headerContainer} testID="header-container">
      <Text testID="title" style={styles.headerTitle} children={title} />
    </View>
  );
}

export default Header;
