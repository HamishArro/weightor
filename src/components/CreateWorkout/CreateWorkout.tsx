import React, {useState} from 'react';
import {View} from 'react-native';
import useWorkout, {
  Cardio as CardioType,
  Weight as WeightType,
} from '../../hooks/useWorkout/useWorkout';
import Create from './Create/Create';
import Display from './Display/Display';
import Cardio from './Cardio/Cardio';
import Add from './Add/Add';
import {styles} from '../../utils/styleSheet';
import Weight from './Weight/Weight';

enum states {
  'ADD',
  'CREATE',
  'CARDIO',
  'DISPLAY',
  'WEIGHT',
}

function CreateWorkout(): JSX.Element {
  const [flowState, setFlowState] = useState<states>(states.CREATE);
  const {exercises, addCardioExercise, addWeightExercise} = useWorkout();

  const handleAddCardio = (exercise: CardioType) => {
    addCardioExercise(exercise);
    setFlowState(states.DISPLAY);
  };

  const handleAddWeight = (exercise: WeightType) => {
    addWeightExercise(exercise);
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
            handleWeight={() => setFlowState(states.WEIGHT)}
          />
        );
      case states.CREATE:
        return (
          <Create title="Create" onPress={() => setFlowState(states.ADD)} />
        );
      case states.CARDIO:
        return (
          <Cardio
            handleAdd={handleAddCardio}
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
      case states.WEIGHT:
        return (
          <Weight
            handleAdd={handleAddWeight}
            handleBack={() => setFlowState(states.ADD)}
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
