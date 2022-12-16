import { GrowthAreasEntity } from './growth-areas.models';
import {
  growthAreasAdapter,
  GrowthAreasPartialState,
  initialGrowthAreasState,
} from './growth-areas.reducer';
import * as GrowthAreasSelectors from './growth-areas.selectors';

describe('GrowthAreas Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGrowthAreasId = (it: GrowthAreasEntity) => it.id;
  const createGrowthAreasEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GrowthAreasEntity);

  let state: GrowthAreasPartialState;

  beforeEach(() => {
    state = {
      growthAreas: growthAreasAdapter.setAll(
        [
          createGrowthAreasEntity('PRODUCT-AAA'),
          createGrowthAreasEntity('PRODUCT-BBB'),
          createGrowthAreasEntity('PRODUCT-CCC'),
        ],
        {
          ...initialGrowthAreasState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('GrowthAreas Selectors', () => {
    it('selectAllGrowthAreas() should return the list of GrowthAreas', () => {
      const results = GrowthAreasSelectors.selectAllGrowthAreas(state);
      const selId = getGrowthAreasId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = GrowthAreasSelectors.selectEntity(
        state
      ) as GrowthAreasEntity;
      const selId = getGrowthAreasId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectGrowthAreasLoaded() should return the current "loaded" status', () => {
      const result = GrowthAreasSelectors.selectGrowthAreasLoaded(state);

      expect(result).toBe(true);
    });

    it('selectGrowthAreasError() should return the current "error" state', () => {
      const result = GrowthAreasSelectors.selectGrowthAreasError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
