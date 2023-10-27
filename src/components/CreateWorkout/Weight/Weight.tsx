import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Modal, Text, TextInput, Button} from 'react-native';
import {SetProps, WeightProps, CellProps, SetViewProps} from '../types';
import {colors, styles} from '../../../utils/styleSheet';
import {Set as SetType} from '../../../hooks/useWorkout/types';
import {AntDesign} from '@expo/vector-icons';
import Title from '../Title/Title';

// move to shared utils file and create tests for this
const testInt = (input: string) => input && parseInt(input, 10) > 0;

function Cell({text}: CellProps) {
  return (
    <View style={styles.cell}>
      <Text children={text} style={styles.text} />
    </View>
  );
}

function SetView({id, reps, weight, rest, handleRemove}: SetViewProps) {
  return (
    <View style={styles.setContainer} testID={`set-view-container-${id}`}>
      <View style={styles.row}>
        <Cell text={`reps: ${reps}`} />
        <Cell text={`weight: ${weight}`} />
        <Cell text={`rest: ${rest}`} />
        <AntDesign
          name="minuscircleo"
          testID={`remove-set-${id}`}
          onPress={handleRemove}
          size={20}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

function Set({handleAdd, handleBack, title, visible}: SetProps) {
  const [reps, setReps] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [rest, setRest] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);

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

  useEffect(() => {
    if (testInt(reps) && testInt(weight) && testInt(rest)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [reps, rest, weight]);

  return (
    <Modal visible={visible} testID="set-container">
      <SafeAreaView>
        <Title title={title} handleBack={handleBack} />
        <View style={styles.stage}>
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
          {valid && (
            <Button
              testID="save-button"
              title="save"
              onPress={handleSubmit}
              color={colors.midnightGreen}
            />
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

function Weight({handleAdd, handleBack}: WeightProps) {
  const [name, setName] = useState<string>('');
  const [musclesUsed, setMusclesUsed] = useState<string>('');
  const [workoutEffort, setWorkoutEffort] = useState<string>('');
  const [sets, setSets] = useState<SetType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    handleAdd({
      name,
      musclesUsed: musclesUsed.split(','),
      workoutEffort: parseInt(workoutEffort, 10),
      sets,
    });
  };

  const handleRemove = (index: number) => {
    const tempSets = [...sets];

    tempSets.splice(index, 1);

    setSets(tempSets);
  };

  const handleAddSet = (set: SetType) => {
    setSets([...sets, set]);
    setModalVisible(false);
  };

  // add validation for weight

  return (
    <>
      <Title title="Add Weight" handleBack={handleBack} />
      <View style={styles.stage} testID="weight-container">
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
            id={`${index}`}
            reps={reps}
            weight={weight}
            rest={rest}
            handleRemove={() => handleRemove(index)}
          />
        ))}
        <Button
          testID="add-set"
          title="add set"
          onPress={() => setModalVisible(true)}
          color={colors.midnightGreen}
        />
        {Boolean(sets.length) && (
          <Button
            testID="add-button"
            title="add"
            onPress={handleSubmit}
            color={colors.midnightGreen}
          />
        )}
        <Set
          title="Add set"
          handleBack={() => setModalVisible(false)}
          visible={modalVisible}
          handleAdd={handleAddSet}
        />
      </View>
    </>
  );
}

export default Weight;

export {Set, SetView, Cell};
