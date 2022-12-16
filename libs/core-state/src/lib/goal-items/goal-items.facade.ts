import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as GoalItemsActions from './goal-items.actions';
import * as GoalItemsFeature from './goal-items.reducer';
import * as GoalItemsSelectors from './goal-items.selectors';

@Injectable()
export class GoalItemsFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GoalItemsSelectors.selectGoalItemsLoaded));
  allGoalItems$ = this.store.pipe(
    select(GoalItemsSelectors.selectAllGoalItems)
  );
  selectedGoalItems$ = this.store.pipe(select(GoalItemsSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GoalItemsActions.initGoalItems());
  }
}
