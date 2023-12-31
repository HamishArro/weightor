import {Exercises, Cardio, Weight, Set} from '../../hooks/useWorkout/types';

export type TitleProps = {
  title: string;
  handleBack: () => void;
};

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
  handleCardio: () => void;
  handleWeight: () => void;
};

export type CardioProps = {
  handleBack: () => void;
  handleAdd: (exercise: Cardio) => void;
};

export type WeightProps = {
  handleBack: () => void;
  handleAdd: (exercise: Weight) => void;
};

export type SetProps = TitleProps & {
  handleAdd: (set: Set) => void;
  visible: boolean;
};

export type SetViewProps = Set & {
  id: string;
  handleRemove: () => void;
};

export type CellProps = {
  text: string | number;
};
