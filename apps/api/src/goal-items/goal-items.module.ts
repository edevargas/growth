import { Module } from '@nestjs/common';
import { GoalItemsService } from './goal-items.service';
import { GoalItemsController } from './goal-items.controller';

@Module({
  controllers: [GoalItemsController],
  providers: [GoalItemsService]
})
export class GoalItemsModule {}
