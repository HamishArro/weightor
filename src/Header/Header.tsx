import React from 'react';
import {Text, useColorScheme, View, StyleSheet} from 'react-native';
import {HeaderProps} from './Header.d';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  headerContainer: {
    margin: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
});

function Header({title}: HeaderProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.headerContainer} testID="header-container">
      <Text
        testID="title"
        style={[
          styles.title,
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
