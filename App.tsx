/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {registerRootComponent} from 'expo';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header/Header';
import CreateWorkout from './src/components/CreateWorkout/CreateWorkout';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header title="Weightor" />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <CreateWorkout />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

registerRootComponent(App);
