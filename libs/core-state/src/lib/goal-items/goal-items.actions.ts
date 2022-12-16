import { createAction, props } from '@ngrx/store';
import { GoalItemsEntity } from './goal-items.models';

export const initGoalItems = createAction('[GoalItems Page] Init');

export const loadGoalItemsSuccess = createAction(
  '[GoalItems/API] Load GoalItems Success',
  props<{ goalItems: GoalItemsEntity[] }>()
);

export const loadGoalItemsFailure = createAction(
  '[GoalItems/API] Load GoalItems Failure',
  props<{ error: any }>()
);
