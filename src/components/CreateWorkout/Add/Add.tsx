import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addContainer: {
    margin: 32,
    alignItems: 'center',
  },
});

function Add() {
  return (
    <View style={styles.addContainer} testID="add-container">
      <Text children={'Add exercise'} />
    </View>
  );
}

export default Add;
