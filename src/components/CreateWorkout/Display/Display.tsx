import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {DisplayProps} from '../CreateWorkout.d';

const styles = StyleSheet.create({
  CreateWorkoutContainer: {
    margin: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
});

function Display({exercises, addButtonText, addHandler}: DisplayProps) {
  return (
    <View style={styles.CreateWorkoutContainer} testID="add-container">
      {exercises?.map(({name}) => (
        <Text children={name} />
      ))}
      <Button
        testID="create-button"
        title={addButtonText}
        onPress={addHandler}
      />
      ;
    </View>
  );
}

export default Display;
