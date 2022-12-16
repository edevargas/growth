import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GoalsActions from './goals.actions';
import * as GoalsFeature from './goals.reducer';

@Injectable()
export class GoalsEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.initGoals),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GoalsActions.loadGoalsSuccess({ goals: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GoalsActions.loadGoalsFailure({ error });
        },
      })
    )
  );
}
