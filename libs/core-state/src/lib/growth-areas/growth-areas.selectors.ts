import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GROWTH_AREAS_FEATURE_KEY,
  GrowthAreasState,
  growthAreasAdapter,
} from './growth-areas.reducer';

// Lookup the 'GrowthAreas' feature state managed by NgRx
export const selectGrowthAreasState = createFeatureSelector<GrowthAreasState>(
  GROWTH_AREAS_FEATURE_KEY
);

const { selectAll, selectEntities } = growthAreasAdapter.getSelectors();

export const selectGrowthAreasLoaded = createSelector(
  selectGrowthAreasState,
  (state: GrowthAreasState) => state.loaded
);

export const selectGrowthAreasError = createSelector(
  selectGrowthAreasState,
  (state: GrowthAreasState) => state.error
);

export const selectAllGrowthAreas = createSelector(
  selectGrowthAreasState,
  (state: GrowthAreasState) => selectAll(state)
);

export const selectGrowthAreasEntities = createSelector(
  selectGrowthAreasState,
  (state: GrowthAreasState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectGrowthAreasState,
  (state: GrowthAreasState) => state.selectedId
);

export const selectEntity = createSelector(
  selectGrowthAreasEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
