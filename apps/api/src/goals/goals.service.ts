import { Injectable } from '@nestjs/common';
import { Goal } from '@flab/api-data';

@Injectable()
export class GoalsService {
  create(createGoalDto: Goal) {
    return 'This action adds a new goal';
  }

  findAll() {
    return `This action returns all goals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goal`;
  }

  update(id: number, updateGoalDto: Partial<Goal>) {
    return `This action updates a #${id} goal`;
  }

  remove(id: number) {
    return `This action removes a #${id} goal`;
  }
}
