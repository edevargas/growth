import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as GoalsActions from './goals.actions';
import { GoalsEffects } from './goals.effects';
import { GoalsFacade } from './goals.facade';
import { GoalsEntity } from './goals.models';
import {
  GOALS_FEATURE_KEY,
  GoalsState,
  initialGoalsState,
  goalsReducer,
} from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';

interface TestSchema {
  goals: GoalsState;
}

describe('GoalsFacade', () => {
  let facade: GoalsFacade;
  let store: Store<TestSchema>;
  const createGoalsEntity = (id: string, name = ''): GoalsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOALS_FEATURE_KEY, goalsReducer),
          EffectsModule.forFeature([GoalsEffects]),
        ],
        providers: [GoalsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(GoalsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allGoals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allGoals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadGoalsSuccess` to manually update list
     */
    it('allGoals$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allGoals$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        GoalsActions.loadGoalsSuccess({
          goals: [createGoalsEntity('AAA'), createGoalsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allGoals$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
