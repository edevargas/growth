import { Goal } from '@flab/core-data';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';

export const GOALS_FEATURE_KEY = 'goals';

export interface GoalsState extends EntityState<Goal> {
  selectedId?: string | number;
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export interface GoalsPartialState {
  readonly [GOALS_FEATURE_KEY]: GoalsState;
}

export const goalsAdapter: EntityAdapter<Goal> =
  createEntityAdapter<Goal>();

export const initialGoalsState: GoalsState = goalsAdapter.getInitialState({
  loaded: false,
  loading: false
});

const onFailure = (state: GoalsState, { error }: any): GoalsState => ({ ...state, error, loading: false });


const reducer = createReducer(
  initialGoalsState,
  on(GoalsActions.select, (state, { id }) =>
  Object.assign({}, state, { selectedId: id })
  ),
  on(GoalsActions.resetSelected, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
   // Find by user id
  on(GoalsActions.findAllByUserId, (state): GoalsState => ({
    ...state,
    loading: true,
    error: null
  })),
  on(GoalsActions.findAllByUserIdSuccess, (state, { goals }) =>
  goalsAdapter.setAll(goals, { ...state, loading: false })
  ),
  on(GoalsActions.findAllByUserIdFailure, onFailure),
   // Find First class goals by user id
  on(GoalsActions.findFirstClassGoalsByUserId, (state): GoalsState => ({
    ...state,
    loading: true,
    error: null
  })),
  on(GoalsActions.findFirstClassGoalsByUserIdSuccess, (state, { goals }) =>
  goalsAdapter.setAll(goals, { ...state, loading: false })
  ),
  on(GoalsActions.findFirstClassGoalsByUserIdFailure, onFailure),
  // CREATE GOAL
  on(GoalsActions.createGoal, (state): GoalsState => ({
    ...state,
    loading: true,
    error: null
  })),
  on(GoalsActions.createGoalSuccess, (state, { goal }) =>
  goalsAdapter.addOne(goal,  { ...state, loading: false })
  ),
  // UPDATE GOAL
  on(GoalsActions.updateGoal, (state): GoalsState => ({
    ...state,
    loading: true,
    error: null
  })),
  on(GoalsActions.updateGoalSuccess, (state, { goal }) =>
  goalsAdapter.updateOne({id: goal.id, changes: goal},  { ...state, loading: false })
  ),
  on(GoalsActions.updateGoalFailure, onFailure),
  // DELETE GOAL
  on(GoalsActions.deleteGoalSuccess, (state, { id }) => goalsAdapter.removeOne(id, { ...state, loading: false })
  ),
  on(GoalsActions.deleteGoalFailure, onFailure)
);

export function goalsReducer(state: GoalsState | undefined, action: Action) {
  return reducer(state, action);
}
