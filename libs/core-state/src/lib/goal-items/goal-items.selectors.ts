import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GOAL_ITEMS_FEATURE_KEY,
  GoalItemsState,
  goalItemsAdapter,
} from './goal-items.reducer';

// Lookup the 'GoalItems' feature state managed by NgRx
export const selectGoalItemsState = createFeatureSelector<GoalItemsState>(
  GOAL_ITEMS_FEATURE_KEY
);

const { selectAll, selectEntities } = goalItemsAdapter.getSelectors();

export const selectGoalItemsLoaded = createSelector(
  selectGoalItemsState,
  (state: GoalItemsState) => state.loaded
);

export const selectGoalItemsError = createSelector(
  selectGoalItemsState,
  (state: GoalItemsState) => state.error
);

export const selectAllGoalItems = createSelector(
  selectGoalItemsState,
  (state: GoalItemsState) => selectAll(state)
);

export const selectGoalItemsEntities = createSelector(
  selectGoalItemsState,
  (state: GoalItemsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectGoalItemsState,
  (state: GoalItemsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectGoalItemsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
