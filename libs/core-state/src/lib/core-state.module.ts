import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsStateModule } from './goals/goals.module';

@NgModule({
  imports: [
    CommonModule,
    GoalsStateModule],
})
export class CoreStateModule {}
