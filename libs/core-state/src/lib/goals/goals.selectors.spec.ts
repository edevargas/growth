import { GoalsEntity } from './goals.models';
import {
  goalsAdapter,
  GoalsPartialState,
  initialGoalsState,
} from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';

describe('Goals Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGoalsId = (it: GoalsEntity) => it.id;
  const createGoalsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GoalsEntity);

  let state: GoalsPartialState;

  beforeEach(() => {
    state = {
      goals: goalsAdapter.setAll(
        [
          createGoalsEntity('PRODUCT-AAA'),
          createGoalsEntity('PRODUCT-BBB'),
          createGoalsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialGoalsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Goals Selectors', () => {
    it('selectAllGoals() should return the list of Goals', () => {
      const results = GoalsSelectors.selectAllGoals(state);
      const selId = getGoalsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = GoalsSelectors.selectEntity(state) as GoalsEntity;
      const selId = getGoalsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectGoalsLoaded() should return the current "loaded" status', () => {
      const result = GoalsSelectors.selectGoalsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectGoalsError() should return the current "error" state', () => {
      const result = GoalsSelectors.selectGoalsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
