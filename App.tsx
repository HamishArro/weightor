/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {colors} from './src/utils/styleSheet';
import Header from './src/components/Header/Header';
import CreateWorkout from './src/components/CreateWorkout/CreateWorkout';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.mintCream,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header title="Weightor" />
        <View
          style={{
            backgroundColor: colors.mintCream,
          }}>
          <CreateWorkout />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
