import {Exercises} from '../../utils/Workout/Workout';

export type CreateProps = {
  title: string;
  onPress: () => void;
};

export type DisplayProps = {
  exercises: Exercises | undefined;
  addButtonText: string;
  addHandler: () => void;
};
