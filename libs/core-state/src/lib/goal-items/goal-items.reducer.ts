import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GoalItemsActions from './goal-items.actions';
import { GoalItemsEntity } from './goal-items.models';

export const GOAL_ITEMS_FEATURE_KEY = 'goalItems';

export interface GoalItemsState extends EntityState<GoalItemsEntity> {
  selectedId?: string | number; // which GoalItems record has been selected
  loaded: boolean; // has the GoalItems list been loaded
  error?: string | null; // last known error (if any)
}

export interface GoalItemsPartialState {
  readonly [GOAL_ITEMS_FEATURE_KEY]: GoalItemsState;
}

export const goalItemsAdapter: EntityAdapter<GoalItemsEntity> =
  createEntityAdapter<GoalItemsEntity>();

export const initialGoalItemsState: GoalItemsState =
  goalItemsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialGoalItemsState,
  on(GoalItemsActions.initGoalItems, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GoalItemsActions.loadGoalItemsSuccess, (state, { goalItems }) =>
    goalItemsAdapter.setAll(goalItems, { ...state, loaded: true })
  ),
  on(GoalItemsActions.loadGoalItemsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function goalItemsReducer(
  state: GoalItemsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
