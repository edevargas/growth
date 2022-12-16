import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GoalsActions from './goals.actions';
import * as GoalsFeature from './goals.reducer';
import * as GoalsSelectors from './goals.selectors';

@Injectable()
export class GoalsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GoalsSelectors.selectGoalsLoaded));
  allGoals$ = this.store.pipe(select(GoalsSelectors.selectAllGoals));
  selectedGoals$ = this.store.pipe(select(GoalsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GoalsActions.initGoals());
  }
}
