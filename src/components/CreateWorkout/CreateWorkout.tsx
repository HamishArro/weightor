import React, {useState} from 'react';
import {View} from 'react-native';
import useWorkout, {Cardio} from '../../hooks/useWorkout/useWorkout';
import Create from './Create/Create';
import Display from './Display/Display';
import Add from './Add/Add';
import {styles} from '../../utils/styleSheet';

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
          <Create title="Create" onPress={() => setFlowState(states.ADD)} />
        );
      case states.ADD:
        return (
          <Add
            handleAdd={handleAdd}
            handleBack={
              exercises.length
                ? () => setFlowState(states.DISPLAY)
                : () => setFlowState(states.CREATE)
            }
          />
        );
      case states.DISPLAY:
        return (
          <Display
            exercises={exercises}
            addButtonText="Add another exercise"
            handleAdd={() => setFlowState(states.ADD)}
          />
        );
    }
  };

  return (
    <View style={styles.container} testID="create-workflow-container">
      {stateSwitch()}
    </View>
  );
}

export default CreateWorkout;
