import { Action } from '@ngrx/store';

import * as GoalItemsActions from './goal-items.actions';
import { GoalItemsEntity } from './goal-items.models';
import {
  GoalItemsState,
  initialGoalItemsState,
  goalItemsReducer,
} from './goal-items.reducer';

describe('GoalItems Reducer', () => {
  const createGoalItemsEntity = (id: string, name = ''): GoalItemsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid GoalItems actions', () => {
    it('loadGoalItemsSuccess should return the list of known GoalItems', () => {
      const goalItems = [
        createGoalItemsEntity('PRODUCT-AAA'),
        createGoalItemsEntity('PRODUCT-zzz'),
      ];
      const action = GoalItemsActions.loadGoalItemsSuccess({ goalItems });

      const result: GoalItemsState = goalItemsReducer(
        initialGoalItemsState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = goalItemsReducer(initialGoalItemsState, action);

      expect(result).toBe(initialGoalItemsState);
    });
  });
});
