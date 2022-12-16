import { Test, TestingModule } from '@nestjs/testing';
import { GoalItemsService } from './goal-items.service';

describe('GoalItemsService', () => {
  let service: GoalItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoalItemsService],
    }).compile();

    service = module.get<GoalItemsService>(GoalItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
