import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GrowthAreasActions from './growth-areas.actions';
import { GrowthAreasEffects } from './growth-areas.effects';

describe('GrowthAreasEffects', () => {
  let actions: Observable<Action>;
  let effects: GrowthAreasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        GrowthAreasEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GrowthAreasEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GrowthAreasActions.initGrowthAreas() });

      const expected = hot('-a-|', {
        a: GrowthAreasActions.loadGrowthAreasSuccess({ growthAreas: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
