import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as AuthActions from '../auth/auth.actions';

@Injectable()
export class LogoutMetaEffects {


  /** ======== LOGOUT ==========*/
  loggedOut$ = createEffect(() => { return this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => {
      sessionStorage.clear();
      this.router.navigate([`/${this.loginPath}`]);
    })
  )}, { dispatch: false });



  constructor(
    private readonly actions$: Actions, private router: Router, @Inject("loginPath") private loginPath: string) {
    }
}
