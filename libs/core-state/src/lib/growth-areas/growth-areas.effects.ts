import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GrowthAreasActions from './growth-areas.actions';
import * as GrowthAreasFeature from './growth-areas.reducer';

@Injectable()
export class GrowthAreasEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GrowthAreasActions.initGrowthAreas),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GrowthAreasActions.loadGrowthAreasSuccess({ growthAreas: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GrowthAreasActions.loadGrowthAreasFailure({ error });
        },
      })
    )
  );
}
