import { Action } from '@ngrx/store';

import * as GrowthAreasActions from './growth-areas.actions';
import { GrowthAreasEntity } from './growth-areas.models';
import {
  GrowthAreasState,
  initialGrowthAreasState,
  growthAreasReducer,
} from './growth-areas.reducer';

describe('GrowthAreas Reducer', () => {
  const createGrowthAreasEntity = (
    id: string,
    name = ''
  ): GrowthAreasEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid GrowthAreas actions', () => {
    it('loadGrowthAreasSuccess should return the list of known GrowthAreas', () => {
      const growthAreas = [
        createGrowthAreasEntity('PRODUCT-AAA'),
        createGrowthAreasEntity('PRODUCT-zzz'),
      ];
      const action = GrowthAreasActions.loadGrowthAreasSuccess({ growthAreas });

      const result: GrowthAreasState = growthAreasReducer(
        initialGrowthAreasState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = growthAreasReducer(initialGrowthAreasState, action);

      expect(result).toBe(initialGrowthAreasState);
    });
  });
});
