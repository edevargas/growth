import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGrowthAreas from './//growth-areas.reducer';
import { GrowthAreasEffects } from './//growth-areas.effects';
import { GrowthAreasFacade } from './//growth-areas.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromGrowthAreas.GROWTH_AREAS_FEATURE_KEY,
      fromGrowthAreas.growthAreasReducer
    ),
    EffectsModule.forFeature([GrowthAreasEffects]),
  ],
  providers: [GrowthAreasFacade],
})
export class GoalsStateModule {}
