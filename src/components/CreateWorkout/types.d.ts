import {Exercises, Cardio} from '../../hooks/useWorkout/types';

export type CreateProps = {
  title: string;
  onPress: () => void;
};

export type DisplayProps = {
  exercises: Exercises;
  addButtonText: string;
  addHandler: () => void;
};

export type AddProps = {
  addCardio: (exercise: Cardio) => void;
};
