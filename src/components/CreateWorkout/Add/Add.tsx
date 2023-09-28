import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {AddProps} from '../types';

const styles = StyleSheet.create({
  addContainer: {
    margin: 32,
    alignItems: 'center',
  },
});

function Add({addCardio}: AddProps) {
  const [name, setName] = useState<string>('');
  const [musclesUsed, setMusclesUsed] = useState<string>('');
  const [workoutEffort, setWorkoutEffort] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleAdd = () => {
    addCardio({
      name,
      musclesUsed: musclesUsed.split(','),
      workoutEffort: parseInt(workoutEffort, 10),
      duration: parseInt(duration, 10),
    });
  };

  return (
    <View style={styles.addContainer} testID="add-container">
      <Text children={'Add exercise'} />
      <TextInput
        testID="name-input"
        value={name}
        onChangeText={setName}
        placeholder="please enter name here"
      />
      <TextInput
        testID="muscles-used-input"
        value={musclesUsed}
        onChangeText={setMusclesUsed}
        placeholder="please enter muscles used"
      />
      <TextInput
        testID="workout-effort-input"
        value={workoutEffort}
        onChangeText={setWorkoutEffort}
        placeholder="please enter workout effort"
        keyboardType="numeric"
      />
      <TextInput
        testID="duration-input"
        value={duration}
        onChangeText={setDuration}
        placeholder="please enter duration"
        keyboardType="numeric"
      />
      <Button testID="add-button" title="add" onPress={handleAdd} />
    </View>
  );
}

export default Add;
