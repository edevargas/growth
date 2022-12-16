import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GrowthAreasActions from './growth-areas.actions';
import { GrowthAreasEntity } from './growth-areas.models';

export const GROWTH_AREAS_FEATURE_KEY = 'growthAreas';

export interface GrowthAreasState extends EntityState<GrowthAreasEntity> {
  selectedId?: string | number; // which GrowthAreas record has been selected
  loaded: boolean; // has the GrowthAreas list been loaded
  error?: string | null; // last known error (if any)
}

export interface GrowthAreasPartialState {
  readonly [GROWTH_AREAS_FEATURE_KEY]: GrowthAreasState;
}

export const growthAreasAdapter: EntityAdapter<GrowthAreasEntity> =
  createEntityAdapter<GrowthAreasEntity>();

export const initialGrowthAreasState: GrowthAreasState =
  growthAreasAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialGrowthAreasState,
  on(GrowthAreasActions.initGrowthAreas, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GrowthAreasActions.loadGrowthAreasSuccess, (state, { growthAreas }) =>
    growthAreasAdapter.setAll(growthAreas, { ...state, loaded: true })
  ),
  on(GrowthAreasActions.loadGrowthAreasFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function growthAreasReducer(
  state: GrowthAreasState | undefined,
  action: Action
) {
  return reducer(state, action);
}
