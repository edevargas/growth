import { GoalItemsEntity } from './goal-items.models';
import {
  goalItemsAdapter,
  GoalItemsPartialState,
  initialGoalItemsState,
} from './goal-items.reducer';
import * as GoalItemsSelectors from './goal-items.selectors';

describe('GoalItems Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGoalItemsId = (it: GoalItemsEntity) => it.id;
  const createGoalItemsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GoalItemsEntity);

  let state: GoalItemsPartialState;

  beforeEach(() => {
    state = {
      goalItems: goalItemsAdapter.setAll(
        [
          createGoalItemsEntity('PRODUCT-AAA'),
          createGoalItemsEntity('PRODUCT-BBB'),
          createGoalItemsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialGoalItemsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('GoalItems Selectors', () => {
    it('selectAllGoalItems() should return the list of GoalItems', () => {
      const results = GoalItemsSelectors.selectAllGoalItems(state);
      const selId = getGoalItemsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = GoalItemsSelectors.selectEntity(state) as GoalItemsEntity;
      const selId = getGoalItemsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectGoalItemsLoaded() should return the current "loaded" status', () => {
      const result = GoalItemsSelectors.selectGoalItemsLoaded(state);

      expect(result).toBe(true);
    });

    it('selectGoalItemsError() should return the current "error" state', () => {
      const result = GoalItemsSelectors.selectGoalItemsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
