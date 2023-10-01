import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {HeaderProps} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from '../../utils/styleSheet';

function Header({title}: HeaderProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container} testID="header-container">
      <Text
        testID="title"
        style={[
          styles.headerTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
