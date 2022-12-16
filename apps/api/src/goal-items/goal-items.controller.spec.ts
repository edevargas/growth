import { Test, TestingModule } from '@nestjs/testing';
import { GoalItemsController } from './goal-items.controller';
import { GoalItemsService } from './goal-items.service';

describe('GoalItemsController', () => {
  let controller: GoalItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoalItemsController],
      providers: [GoalItemsService],
    }).compile();

    controller = module.get<GoalItemsController>(GoalItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
