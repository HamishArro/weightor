import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {DisplayProps} from '../CreateWorkout.d';

const styles = StyleSheet.create({
  displayContainer: {
    margin: 32,
    alignItems: 'center',
  },
});

function Display({exercises, addButtonText, addHandler}: DisplayProps) {
  return (
    <View style={styles.displayContainer} testID="add-container">
      {exercises.map(({name}) => (
        <Text testID={`exercise-${name}`} children={name} />
      ))}
      <Button testID="add-button" title={addButtonText} onPress={addHandler} />
    </View>
  );
}

export default Display;
