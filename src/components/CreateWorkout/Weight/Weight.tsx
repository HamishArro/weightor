import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {SetProps, WeightProps} from '../types';
import {styles} from '../../../utils/styleSheet';
import {Set as SetType} from '../../../hooks/useWorkout/types';

function SetView({reps, weight, rest}: SetType) {
  return (
    <View style={styles.setContainer} testID="set-view-container">
      <Text children={reps} style={styles.text} />
      <Text children={weight} style={styles.text} />
      <Text children={rest} style={styles.text} />
    </View>
  );
}

function Set({handleAdd}: SetProps) {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [rest, setRest] = useState<string>('');

  const handleSubmit = () => {
    setReps('');
    setRest('');
    setWeight('');
    handleAdd({
      reps: parseInt(reps, 10),
      weight: parseInt(weight, 10),
      rest: parseInt(rest, 10),
    });
  };

  return (
    <View style={styles.setContainer} testID="set-container">
      <TextInput
        testID="reps-input"
        value={reps}
        style={styles.textInput}
        onChangeText={setReps}
        placeholder="please enter number off reps"
        keyboardType="numeric"
      />
      <TextInput
        testID="weight-input"
        value={weight}
        style={styles.textInput}
        onChangeText={setWeight}
        placeholder="please enter weight"
        keyboardType="numeric"
      />
      <TextInput
        testID="rest-input"
        value={rest}
        style={styles.textInput}
        onChangeText={setRest}
        placeholder="please enter rest time"
        keyboardType="numeric"
      />
      <Button testID="save-button" title="save" onPress={handleSubmit} />
    </View>
  );
}

function Weight({handleAdd, handleBack}: WeightProps) {
  const [name, setName] = useState<string>('');
  const [musclesUsed, setMusclesUsed] = useState<string>('');
  const [workoutEffort, setWorkoutEffort] = useState<string>('');
  const [sets, setSets] = useState<SetType[]>([]);

  const handleSubmit = () => {
    handleAdd({
      name,
      musclesUsed: musclesUsed.split(','),
      workoutEffort: parseInt(workoutEffort, 10),
      sets,
    });
  };

  return (
    <View style={styles.stage} testID="weight-container">
      <Text children={'Add exercise'} style={styles.title} />
      <Button testID="back-button" title="back" onPress={handleBack} />
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
      {sets.map(({reps, weight, rest}, index) => (
        <SetView
          key={`${reps}-${weight}-${rest}-${index}`}
          reps={reps}
          weight={weight}
          rest={rest}
        />
      ))}
      <Set handleAdd={set => setSets([...sets, set])} />
      <Button testID="add-button" title="add" onPress={handleSubmit} />
    </View>
  );
}

export default Weight;
