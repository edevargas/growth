import { Module } from '@nestjs/common';
import { GoalItemsModule } from '../goal-items/goal-items.module';
import { GoalsModule } from '../goals/goals.module';
import { GrowthAreasModule } from '../growth-areas/growth-areas.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GoalItemsModule,
    GoalsModule,
    GrowthAreasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
