import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoals from './goals.reducer';
import { GoalsEffects } from './goals.effects';
import { GoalsFacade } from './goals.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(fromGoals.GOALS_FEATURE_KEY, fromGoals.goalsReducer),
    EffectsModule.forFeature([GoalsEffects])
  ],
  providers: [GoalsFacade],
})
export class GoalsStateModule {}
