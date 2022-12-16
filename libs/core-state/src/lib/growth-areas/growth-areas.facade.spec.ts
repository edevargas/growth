import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { readFirst } from '@nrwl/angular/testing';

import * as GrowthAreasActions from './growth-areas.actions';
import { GrowthAreasEffects } from './growth-areas.effects';
import { GrowthAreasFacade } from './growth-areas.facade';
import { GrowthAreasEntity } from './growth-areas.models';
import {
  GROWTH_AREAS_FEATURE_KEY,
  GrowthAreasState,
  initialGrowthAreasState,
  growthAreasReducer,
} from './growth-areas.reducer';
import * as GrowthAreasSelectors from './growth-areas.selectors';

interface TestSchema {
  growthAreas: GrowthAreasState;
}

describe('GrowthAreasFacade', () => {
  let facade: GrowthAreasFacade;
  let store: Store<TestSchema>;
  const createGrowthAreasEntity = (
    id: string,
    name = ''
  ): GrowthAreasEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GROWTH_AREAS_FEATURE_KEY, growthAreasReducer),
          EffectsModule.forFeature([GrowthAreasEffects]),
        ],
        providers: [GrowthAreasFacade],
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
      facade = TestBed.inject(GrowthAreasFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allGrowthAreas$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allGrowthAreas$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadGrowthAreasSuccess` to manually update list
     */
    it('allGrowthAreas$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allGrowthAreas$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        GrowthAreasActions.loadGrowthAreasSuccess({
          growthAreas: [
            createGrowthAreasEntity('AAA'),
            createGrowthAreasEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allGrowthAreas$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
