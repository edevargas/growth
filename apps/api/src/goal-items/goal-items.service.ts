import { GoalItem } from '@flab/api-data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalItemsService {
  create(createGoalItemDto: GoalItem) {
    return 'This action adds a new goalItem';
  }

  findAll() {
    return `This action returns all goalItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goalItem`;
  }

  update(id: number, updateGoalItemDto: Partial<GoalItem>) {
    return `This action updates a #${id} goalItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} goalItem`;
  }
}
