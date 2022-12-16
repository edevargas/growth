import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GoalItemsActions from './goal-items.actions';
import * as GoalItemsFeature from './goal-items.reducer';

@Injectable()
export class GoalItemsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalItemsActions.initGoalItems),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GoalItemsActions.loadGoalItemsSuccess({ goalItems: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GoalItemsActions.loadGoalItemsFailure({ error });
        },
      })
    )
  );
}
