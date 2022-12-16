import { GoalItem } from '@flab/api-data';
import { apiMocks } from '@flab/utils';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class GoalItemsService {
  goalItemsMock = apiMocks.goalItemsMock;

  create(goalItem: GoalItem) {
    this.goalItemsMock = [...this.goalItemsMock, Object.assign({}, goalItem, { id: uuidv4() })];
    return this.goalItemsMock;
  }

  findAll() {
    return this.goalItemsMock;
  }

  findOne(id: string) {
    return this.goalItemsMock.find((goalItem) => goalItem.id === id);
  }

  update(id: string, goalItemUpdate: Partial<GoalItem>) {
    this.goalItemsMock = this.goalItemsMock.map((goalItem) => (goalItem.id === id ? {...goalItem, ...goalItemUpdate,} : goalItem));
    return this.goalItemsMock;
  }

  remove(id: string) {
    this.goalItemsMock = this.goalItemsMock.filter((goalItem) => goalItem.id !== id);
    return this.goalItemsMock;
  }
}
