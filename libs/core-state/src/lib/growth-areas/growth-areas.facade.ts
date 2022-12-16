import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GrowthAreasActions from './growth-areas.actions';
import * as GrowthAreasFeature from './growth-areas.reducer';
import * as GrowthAreasSelectors from './growth-areas.selectors';

@Injectable()
export class GrowthAreasFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(GrowthAreasSelectors.selectGrowthAreasLoaded)
  );
  allGrowthAreas$ = this.store.pipe(
    select(GrowthAreasSelectors.selectAllGrowthAreas)
  );
  selectedGrowthAreas$ = this.store.pipe(
    select(GrowthAreasSelectors.selectEntity)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GrowthAreasActions.initGrowthAreas());
  }
}
