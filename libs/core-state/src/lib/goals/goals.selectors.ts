import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GOALS_FEATURE_KEY, GoalsState, goalsAdapter } from './goals.reducer';

// Lookup the 'Goals' feature state managed by NgRx
export const selectGoalsState =
  createFeatureSelector<GoalsState>(GOALS_FEATURE_KEY);

const { selectAll, selectEntities } = goalsAdapter.getSelectors();

export const selectGoalsLoaded = createSelector(
  selectGoalsState,
  (state: GoalsState) => state.loaded
);

export const selectGoalsError = createSelector(
  selectGoalsState,
  (state: GoalsState) => state.error
);

export const selectAllGoals = createSelector(
  selectGoalsState,
  (state: GoalsState) => selectAll(state)
);

export const selectGoalsEntities = createSelector(
  selectGoalsState,
  (state: GoalsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectGoalsState,
  (state: GoalsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectGoalsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
