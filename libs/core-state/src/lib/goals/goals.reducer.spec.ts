import { Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';
import { GoalsEntity } from './goals.models';
import { GoalsState, initialGoalsState, goalsReducer } from './goals.reducer';

describe('Goals Reducer', () => {
  const createGoalsEntity = (id: string, name = ''): GoalsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Goals actions', () => {
    it('loadGoalsSuccess should return the list of known Goals', () => {
      const goals = [
        createGoalsEntity('PRODUCT-AAA'),
        createGoalsEntity('PRODUCT-zzz'),
      ];
      const action = GoalsActions.loadGoalsSuccess({ goals });

      const result: GoalsState = goalsReducer(initialGoalsState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = goalsReducer(initialGoalsState, action);

      expect(result).toBe(initialGoalsState);
    });
  });
});
