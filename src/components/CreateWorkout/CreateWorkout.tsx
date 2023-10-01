import React, {useState} from 'react';
import {View} from 'react-native';
import useWorkout, {
  Cardio as CardioType,
} from '../../hooks/useWorkout/useWorkout';
import Create from './Create/Create';
import Display from './Display/Display';
import Cardio from './Cardio/Cardio';
import Add from './Add/Add';
import {styles} from '../../utils/styleSheet';

enum states {
  'ADD',
  'CREATE',
  'CARDIO',
  'DISPLAY',
}

function CreateWorkout(): JSX.Element {
  const [flowState, setFlowState] = useState<states>(states.CREATE);

  const {exercises, addCardioExercise} = useWorkout();

  const handleAdd = (exercise: CardioType) => {
    addCardioExercise(exercise);
    setFlowState(states.DISPLAY);
  };

  const handleBack = exercises.length
    ? () => setFlowState(states.DISPLAY)
    : () => setFlowState(states.CREATE);

  const stateSwitch = () => {
    switch (flowState) {
      case states.ADD:
        return (
          <Add
            handleBack={handleBack}
            handleCardio={() => setFlowState(states.CARDIO)}
            handleWeight={() => setFlowState(states.CARDIO)}
          />
        );
      case states.CREATE:
        return (
          <Create title="Create" onPress={() => setFlowState(states.ADD)} />
        );
      case states.CARDIO:
        return (
          <Cardio
            handleAdd={handleAdd}
            handleBack={() => setFlowState(states.ADD)}
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
