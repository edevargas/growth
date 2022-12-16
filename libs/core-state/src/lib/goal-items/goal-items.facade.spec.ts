import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as GoalItemsActions from './goal-items.actions';
import { GoalItemsEffects } from './goal-items.effects';
import { GoalItemsFacade } from './goal-items.facade';
import { GoalItemsEntity } from './goal-items.models';
import {
  GOAL_ITEMS_FEATURE_KEY,
  GoalItemsState,
  initialGoalItemsState,
  goalItemsReducer,
} from './goal-items.reducer';
import * as GoalItemsSelectors from './goal-items.selectors';

interface TestSchema {
  goalItems: GoalItemsState;
}

describe('GoalItemsFacade', () => {
  let facade: GoalItemsFacade;
  let store: Store<TestSchema>;
  const createGoalItemsEntity = (id: string, name = ''): GoalItemsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOAL_ITEMS_FEATURE_KEY, goalItemsReducer),
          EffectsModule.forFeature([GoalItemsEffects]),
        ],
        providers: [GoalItemsFacade],
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
      facade = TestBed.inject(GoalItemsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allGoalItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allGoalItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadGoalItemsSuccess` to manually update list
     */
    it('allGoalItems$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allGoalItems$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        GoalItemsActions.loadGoalItemsSuccess({
          goalItems: [
            createGoalItemsEntity('AAA'),
            createGoalItemsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allGoalItems$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
