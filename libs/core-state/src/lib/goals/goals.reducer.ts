import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';
import { GoalsEntity } from './goals.models';

export const GOALS_FEATURE_KEY = 'goals';

export interface GoalsState extends EntityState<GoalsEntity> {
  selectedId?: string | number; // which Goals record has been selected
  loaded: boolean; // has the Goals list been loaded
  error?: string | null; // last known error (if any)
}

export interface GoalsPartialState {
  readonly [GOALS_FEATURE_KEY]: GoalsState;
}

export const goalsAdapter: EntityAdapter<GoalsEntity> =
  createEntityAdapter<GoalsEntity>();

export const initialGoalsState: GoalsState = goalsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialGoalsState,
  on(GoalsActions.initGoals, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GoalsActions.loadGoalsSuccess, (state, { goals }) =>
    goalsAdapter.setAll(goals, { ...state, loaded: true })
  ),
  on(GoalsActions.loadGoalsFailure, (state, { error }) => ({ ...state, error }))
);

export function goalsReducer(state: GoalsState | undefined, action: Action) {
  return reducer(state, action);
}
