import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Workout, {WorkoutInterface} from '../../utils/Workout/Workout';
import Create from './Create/Create';
import Display from './Display/Display';
import Add from './Add/Add';

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

enum states {
  'CREATE',
  'ADD',
  'DISPLAY',
}

function CreateWorkout(): JSX.Element {
  const [flowState, setFlowState] = useState<states>(states.CREATE);
  const [workout, setWorkout] = useState<WorkoutInterface | undefined>(
    undefined,
  );

  const handleCreate = () => {
    setWorkout(new Workout(new Date()));
    setFlowState(states.ADD);
  };

  const stateSwitch = () => {
    switch (flowState) {
      case states.CREATE:
        return <Create title="create" onPress={handleCreate} />;
      case states.ADD:
        return <Add />;
      case states.DISPLAY:
        return (
          <Display
            exercises={workout?.exercises}
            addButtonText="Add another exercise"
            addHandler={() => setFlowState(states.ADD)}
          />
        );
    }
  };

  return (
    <View
      style={styles.CreateWorkoutContainer}
      testID="create-workflow-container">
      {stateSwitch()}
    </View>
  );
}

export default CreateWorkout;
