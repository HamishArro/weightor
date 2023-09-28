import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {DisplayProps} from '../types';

const styles = StyleSheet.create({
  displayContainer: {
    margin: 32,
    alignItems: 'center',
  },
});

function Display({exercises, addButtonText, addHandler}: DisplayProps) {
  return (
    <View style={styles.displayContainer} testID="display-container">
      {exercises.map(({name}) => (
        <Text testID={`exercise-${name}`} children={name} />
      ))}
      <Button testID="add-button" title={addButtonText} onPress={addHandler} />
    </View>
  );
}

export default Display;
