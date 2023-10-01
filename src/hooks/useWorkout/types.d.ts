export interface WorkoutInterface {
  date: Date;
  exercises: Exercises;
  addWeightExercise: (exercise: Weight) => void;
  addCardioExercise: (exercise: Cardio) => void;
}

export type Exercises = Array<Cardio | Weight>;

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
