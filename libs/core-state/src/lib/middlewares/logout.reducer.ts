import { ActionReducer, MetaReducer } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';

export function logoutMetaReducer(reducer: ActionReducer<any>): ActionReducer<any>{
  return function (state, action) {

    if (action.type === AuthActions.logout.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [logoutMetaReducer];
