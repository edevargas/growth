import { Injectable, inject } from '@angular/core';
import { Goal, GoalsService } from '@flab/core-data';
import { NotifiersUtilService } from '@flab/utils';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map, tap } from 'rxjs';
import { GoalsActions } from '.';


@Injectable()
export class GoalsEffects {
  private actions$ = inject(Actions);
  private goalsService = inject(GoalsService);
  private notifier = inject(NotifiersUtilService);

  //************* FIND ALL BY USER ID ****************/

  findAllByUserIdInitialized$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.findAllByUserId),
      fetch({
        run: ({ userId }) =>
          this.goalsService
            .findAllByUserId(userId)
            .pipe(
              map((goals: Goal[]) =>
                GoalsActions.findAllByUserIdSuccess({ goals })
              )
            ),
        onError: (action, error) => GoalsActions.findAllByUserIdFailure({ error }),
      })
    )
  });

  findAllByUserIdFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.findAllByUserIdFailure),
      tap(({ error }) => this.notifier.handleError(error))
    )
  }, { dispatch: false });

  //************* FIND FIRST CLASS GOALS BY USER ID ****************/

  findFirstClassGoalsByUserIdInitialized$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.findFirstClassGoalsByUserId),
      fetch({
        run: ({ userId }) =>
          this.goalsService
            .findFirstClassGoalsByUserId(userId)
            .pipe(
              map((goals: Goal[]) =>
                GoalsActions.findFirstClassGoalsByUserIdSuccess({ goals })
              )
            ),
        onError: (action, error) => GoalsActions.findFirstClassGoalsByUserIdFailure({ error }),
      })
    )
  });

  findFirstClassGoalsByUserIdFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.findFirstClassGoalsByUserIdFailure),
      tap(({ error }) => this.notifier.handleError(error))
    )
  }, { dispatch: false });

  //************* CREATE ****************/

  createGoal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.createGoal),
      pessimisticUpdate({
        run: ({ goal }) =>
          this.goalsService
            .create(goal)
            .pipe(
              map((goal: Goal) =>
                GoalsActions.createGoalSuccess({ goal })
              )
            ),
        onError: (action, error) => GoalsActions.createGoalFailure({ error }),
      })
    )
  });

  createGoalSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.createGoalSuccess),
      tap(() => this.notifier.notify("The Goal was successfully created."))
    )
  }, { dispatch: false });

  createGoalFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.createGoalFailure),
      tap(({ error }) => this.notifier.handleError(error))
    )
  }, { dispatch: false });

  //************* UPDATE ****************/

  updateGoal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.updateGoal),
      pessimisticUpdate({
        run: ({ id, goal }) =>
          this.goalsService
            .update(id, goal)
            .pipe(
              map((goal: Goal) =>
                GoalsActions.updateGoalSuccess({ goal })
              )
            ),
        onError: (action, error) => GoalsActions.updateGoalFailure({ error }),
      })
    )
  });

  updateGoalSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.updateGoalSuccess),
      tap(() => this.notifier.notify("The Goal was successfully updated.")))
  }, { dispatch: false });

  updateGoalFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.updateGoalFailure),
      tap(({ error }) => this.notifier.handleError(error))
    )
  }, { dispatch: false });

 //************* DELETE ****************/
  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.deleteGoal),
      pessimisticUpdate({
        run: ({ id }) => {
          return this.goalsService
            .delete(id)
            .pipe(
              map(() =>
                GoalsActions.deleteGoalSuccess({ id })
              )
            )
        },
        onError: (action, error) => GoalsActions.deleteGoalFailure({ error }),
      })
    )
  });

  deleteUserSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.deleteGoalSuccess),
      tap(() => this.notifier.notify("The Goal was successfully deleted."))
    )
  }, { dispatch: false });

  deleteUserFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GoalsActions.deleteGoalFailure),
      tap(({ error }) => this.notifier.handleError(error))
    )
  }, { dispatch: false });




}
