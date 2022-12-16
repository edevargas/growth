import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GoalItemsActions from './goal-items.actions';
import { GoalItemsEffects } from './goal-items.effects';

describe('GoalItemsEffects', () => {
  let actions: Observable<Action>;
  let effects: GoalItemsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GoalItemsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GoalItemsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GoalItemsActions.initGoalItems() });

      const expected = hot('-a-|', {
        a: GoalItemsActions.loadGoalItemsSuccess({ goalItems: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
