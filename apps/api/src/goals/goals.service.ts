import { Injectable } from '@nestjs/common';
import { Goal } from '@flab/api-data';
import { apiMocks } from '@flab/utils';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GoalsService {

  goalsMock = apiMocks.goalsMock;

  create(goal: Goal) {
    this.goalsMock = [...this.goalsMock, Object.assign({}, goal, { id: uuidv4() })];
    return this.goalsMock;
  }

  findAll() {
    return this.goalsMock;
  }

  findOne(id: string) {
    return this.goalsMock.find((goal) => goal.id === id);
  }

  update(id: string, goalUpdate: Partial<Goal>) {
    this.goalsMock = this.goalsMock.map((goal) => (goal.id === id ? {...goal, ...goalUpdate,} : goal));
    return this.goalsMock;
  }

  remove(id: string) {
    this.goalsMock = this.goalsMock.filter((goal) => goal.id !== id);
    return this.goalsMock;
  }
}

