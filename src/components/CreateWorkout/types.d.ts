import {Exercises, Cardio} from '../../hooks/useWorkout/types';

export type CreateProps = {
  title: string;
  onPress: () => void;
};

export type DisplayProps = {
  exercises: Exercises;
  addButtonText: string;
  handleAdd: () => void;
};

export type AddProps = {
  handleBack: () => void;
  handleAdd: (exercise: Cardio) => void;
};
