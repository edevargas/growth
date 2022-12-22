import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsStateModule } from './goals/goals.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { LogoutMetaEffects } from './middlewares/logout.effects';

const STORE_NAME = 'my-growth-store';

const storeConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
    strictActionTypeUniqueness: true,
  }
};
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}, storeConfig),
    EffectsModule.forRoot([LogoutMetaEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    GoalsStateModule
  ],
})
export class MyGrowthStateModule {}
