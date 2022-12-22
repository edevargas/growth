import { Injectable } from '@nestjs/common';
import { enums, Goal } from '@flab/api-data';
import { v4 as uuidv4 } from 'uuid';
import { apiMocks } from '@flab/testing-utils/mocks';

@Injectable()
export class GoalsService {

  goalsMock = Object.values(apiMocks.GOALS_MOCK);

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

  findAllByUserId(userId: string) {
    return this.goalsMock.filter((goal) => goal.userId === userId);
  }

  findFirstClassByUserId(userId: string) {
    return this.goalsMock.filter((goal) => goal.userId === userId && !goal.goalParentId);
  }

  findGoalChildren(goalId: string) {
    return this.goalsMock.filter((goal) => goal.goalParentId === goalId);
  }

  findAllByState(userId: string, state: enums.GOAL_STATE) {
    return this.goalsMock.filter((goal) => goal.state === state && goal.userId === userId);
  }

  findFirstClassByState(userId: string, state: enums.GOAL_STATE) {
    return this.goalsMock.filter((goal) => goal.state === state && !goal.goalParentId && goal.userId === userId);
  }

  findGoalChildrenByState(userId: string, state: enums.GOAL_STATE) {
    return this.goalsMock.filter((goal) => goal.state === state && goal.goalParentId && goal.userId === userId);
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

