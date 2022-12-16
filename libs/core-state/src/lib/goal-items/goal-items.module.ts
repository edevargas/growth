import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoalItems from './goal-items.reducer';
import { GoalItemsEffects } from './goal-items.effects';
import { GoalItemsFacade } from './goal-items.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromGoalItems.GOAL_ITEMS_FEATURE_KEY,
      fromGoalItems.goalItemsReducer
    ),
    EffectsModule.forFeature([GoalItemsEffects]),
  ],
  providers: [GoalItemsFacade],
})
export class GrowthAreasStateModule {}
