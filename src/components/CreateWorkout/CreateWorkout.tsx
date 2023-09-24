import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Workout from '../../utils/Workout/Workout';
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
  const [workout] = useState(new Workout(new Date()));

  const handleCreate = () => {
    setFlowState(states.ADD);
  };

  const stateSwitch = () => {
    switch (flowState) {
      case states.CREATE:
        return <Create title="create" onPress={handleCreate} />;
      case states.ADD:
        return <Add addCardio={workout.addCardioExercise} />;
      case states.DISPLAY:
        return (
          <Display
            exercises={workout.exercises}
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
