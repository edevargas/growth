import { Goal } from '@flab/core-data';
import { createAction, props } from '@ngrx/store';

//************* FIND ALL BY USER ID ****************/
export const findAllByUserId = createAction(
  '[Goals/API] Find Goals By User Id',
  props<{ userId: string }>()
);

export const findAllByUserIdSuccess = createAction(
  '[Goals/API] Find Goals By User Id Success',
  props<{ goals: Goal[] }>()
);

export const findAllByUserIdFailure = createAction(
  '[Goals/API] Find Goals By User Id Failure',
  props<{ error: any }>()
);

//************* FIND FIRST CLASS GOALS BY USER ID ****************/
export const findFirstClassGoalsByUserId = createAction(
  '[Goals/API] Find First Class Goals By User Id',
  props<{ userId: string }>()
);

export const findFirstClassGoalsByUserIdSuccess = createAction(
  '[Goals/API] Find First Class Goals By User Id Success',
  props<{ goals: Goal[] }>()
);

export const findFirstClassGoalsByUserIdFailure = createAction(
  '[Goals/API] Find First Class Goals By User Id Failure',
  props<{ error: any }>()
);

//************* CREATE ****************/
export const createGoal = createAction(
  '[Goals/API] Create Goal',
  props<{ goal: Partial<Goal> }>()
);

export const createGoalSuccess = createAction(
  '[Goals/API] Create Goal Success',
  props<{ goal: Goal }>()
);

export const createGoalFailure = createAction(
  '[Goals/API] Create Goal Failure',
  props<{ error: any }>()
);

//************* UPDATE ****************/
export const updateGoal = createAction(
  '[Goals/API] Update Goal',
  props<{ id: string, goal: Partial<Goal> }>()
);

export const updateGoalSuccess = createAction(
  '[Goals/API] Update Goal Success',
  props<{ goal: Goal }>()
);

export const updateGoalFailure = createAction(
  '[Goals/API] Update Goal Failure',
  props<{ error: any }>()
);

//************* DELETE ****************/
export const deleteGoal = createAction(
  '[Goals/API] Delete Goal',
  props<{ id: string }>()
);

export const deleteGoalSuccess = createAction(
  '[Goals/API] Delete Goal Success',
  props<{ id: string }>()
  );

export const deleteGoalFailure = createAction(
  '[Goals/API] Delete Goal Failure',
  props<{ error: any }>()
);

//************* SELECT ****************/
export const select = createAction(
  '[Goals] Select Goal',
  props<{ id: string }>()
);

export const resetSelected = createAction('[Goals] Reset Goal Selected');
export const resetAll = createAction('[Goals] Reset All');
