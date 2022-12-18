import { Injectable, inject } from '@angular/core';
import { Goal } from '@flab/core-data';
import { select, Store, Action } from '@ngrx/store';
import { GoalsActions, GoalsSelectors } from '.';



@Injectable()
export class GoalsFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(GoalsSelectors.selectGoalsLoaded));
  loading$ = this.store.pipe(select(GoalsSelectors.selectGoalsLoading));
  allGoals$ = this.store.pipe(select(GoalsSelectors.selectAllGoals));
  selectedGoals$ = this.store.pipe(select(GoalsSelectors.selectSelectedEntity));

  selectGoal(goalId: string) {
    this.dispatch(GoalsActions.select({ id: goalId }));
  }

  findFirstClassGoalsByUserId(userId: string) {
    this.dispatch(GoalsActions.findFirstClassGoalsByUserId({ userId }));
  }

  findAllByUserId(userId: string) {
    this.dispatch(GoalsActions.findAllByUserId({ userId }));
  }

  saveGoal(goal: Partial<Goal>) {
    if(goal.id) {
      this.updateGoal(goal.id, goal);
    } else {
      this.createGoal(goal);
    }
  }

  createGoal(goal: Partial<Goal>) {
    this.dispatch(GoalsActions.createGoal({ goal }));
  }

  updateGoal(goalId: string, goal: Partial<Goal>) {
    this.dispatch(GoalsActions.updateGoal({ id: goalId, goal }));
  }

  deleteGoal(goalId: string) {
    this.dispatch(GoalsActions.deleteGoal({ id: goalId }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

}
