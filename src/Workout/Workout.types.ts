export interface WorkoutInterface {
  date: Date;
  exercises: Array<Cardio | Weight>;
  addWeightExercise: (
    name: string,
    musclesUsed: string[],
    workoutEffort: number,
    sets: Set[],
  ) => void;
  addCardioExercise: (
    name: string,
    musclesUsed: string[],
    workoutEffort: number,
    duration: number,
  ) => void;
}

type Exercise = {
  name: string;
  musclesUsed: string[];
  workoutEffort: number;
};

export type Cardio = Exercise & {
  duration: number;
};

export type Weight = Exercise & {
  sets: Set[];
};

export type Set = {
  reps: number;
  weight: number;
  rest: number;
};
