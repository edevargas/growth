import { createAction, props } from '@ngrx/store';
import { GoalsEntity } from './goals.models';

export const initGoals = createAction('[Goals Page] Init');

export const loadGoalsSuccess = createAction(
  '[Goals/API] Load Goals Success',
  props<{ goals: GoalsEntity[] }>()
);

export const loadGoalsFailure = createAction(
  '[Goals/API] Load Goals Failure',
  props<{ error: any }>()
);
