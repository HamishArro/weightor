import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {CardioProps} from '../types';
import {styles} from '../../../utils/styleSheet';
import Title from '../Title/Title';

function Cardio({handleAdd, handleBack}: CardioProps) {
  const [name, setName] = useState<string>('');
  const [musclesUsed, setMusclesUsed] = useState<string>('');
  const [workoutEffort, setWorkoutEffort] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleSubmit = () => {
    handleAdd({
      name,
      musclesUsed: musclesUsed.split(','),
      workoutEffort: parseInt(workoutEffort, 10),
      duration: parseInt(duration, 10),
    });
  };

  return (
    <View style={styles.stage} testID="cardio-container">
      <Title title="Add Cardio" handleBack={handleBack} />
      <TextInput
        testID="name-input"
        value={name}
        style={styles.textInput}
        onChangeText={setName}
        placeholder="please enter name here"
      />
      <TextInput
        testID="muscles-used-input"
        value={musclesUsed}
        style={styles.textInput}
        onChangeText={setMusclesUsed}
        placeholder="please enter muscles used"
      />
      <TextInput
        testID="workout-effort-input"
        value={workoutEffort}
        style={styles.textInput}
        onChangeText={setWorkoutEffort}
        placeholder="please enter workout effort"
        keyboardType="numeric"
      />
      <TextInput
        testID="duration-input"
        value={duration}
        style={styles.textInput}
        onChangeText={setDuration}
        placeholder="please enter duration"
        keyboardType="numeric"
      />
      <Button testID="add-button" title="add" onPress={handleSubmit} />
    </View>
  );
}

export default Cardio;
