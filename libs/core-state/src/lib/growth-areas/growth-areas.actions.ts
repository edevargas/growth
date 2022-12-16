import { createAction, props } from '@ngrx/store';
import { GrowthAreasEntity } from './growth-areas.models';

export const initGrowthAreas = createAction('[GrowthAreas Page] Init');

export const loadGrowthAreasSuccess = createAction(
  '[GrowthAreas/API] Load GrowthAreas Success',
  props<{ growthAreas: GrowthAreasEntity[] }>()
);

export const loadGrowthAreasFailure = createAction(
  '[GrowthAreas/API] Load GrowthAreas Failure',
  props<{ error: any }>()
);
