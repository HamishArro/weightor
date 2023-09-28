import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import useWorkout, {Cardio} from '../../hooks/useWorkout/useWorkout';
import Create from './Create/Create';
import Display from './Display/Display';
import Add from './Add/Add';

const styles = StyleSheet.create({
  createWorkoutContainer: {
    margin: 32,
    alignItems: 'center',
  },
});

enum states {
  'CREATE',
  'ADD',
  'DISPLAY',
}

function CreateWorkout(): JSX.Element {
  const [flowState, setFlowState] = useState<states>(states.CREATE);

  const {exercises, addCardioExercise} = useWorkout();

  const handleAdd = (exercise: Cardio) => {
    addCardioExercise(exercise);
    setFlowState(states.DISPLAY);
  };

  const stateSwitch = () => {
    switch (flowState) {
      case states.CREATE:
        return (
          <Create title="create" onPress={() => setFlowState(states.ADD)} />
        );
      case states.ADD:
        return <Add addCardio={handleAdd} />;
      case states.DISPLAY:
        return (
          <Display
            exercises={exercises}
            addButtonText="Add another exercise"
            addHandler={() => setFlowState(states.ADD)}
          />
        );
    }
  };

  return (
    <View
      style={styles.createWorkoutContainer}
      testID="create-workflow-container">
      {stateSwitch()}
    </View>
  );
}

export default CreateWorkout;
