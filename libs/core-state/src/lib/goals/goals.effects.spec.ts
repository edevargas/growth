import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GoalsActions from './goals.actions';
import { GoalsEffects } from './goals.effects';

describe('GoalsEffects', () => {
  let actions: Observable<Action>;
  let effects: GoalsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GoalsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GoalsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GoalsActions.initGoals() });

      const expected = hot('-a-|', {
        a: GoalsActions.loadGoalsSuccess({ goals: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
