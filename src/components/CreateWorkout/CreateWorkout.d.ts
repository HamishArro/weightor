import {Exercises, Cardio} from '../../utils/Workout/Workout';

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
