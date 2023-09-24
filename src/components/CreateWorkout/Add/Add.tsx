import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {AddProps} from '../CreateWorkout.d';

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
        value={name}
        onChangeText={setName}
        placeholder="please enter name here"
      />
      <TextInput
        value={musclesUsed}
        onChangeText={setMusclesUsed}
        placeholder="please enter muscles used"
      />
      <TextInput
        value={workoutEffort}
        onChangeText={setWorkoutEffort}
        placeholder="please enter workout effort"
        keyboardType="numeric"
      />
      <TextInput
        value={duration}
        onChangeText={setDuration}
        placeholder="please enter duration"
        keyboardType="numeric"
      />
      <Button title="add" onPress={handleAdd} />
    </View>
  );
}

export default Add;
