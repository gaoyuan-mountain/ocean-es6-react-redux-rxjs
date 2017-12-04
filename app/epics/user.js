import { Observable } from 'rxjs/Observable';
import { ActionTypes } from 'constants';
import UserService from 'services/user';

export function userLogin(action$) {
  return action$.ofType(ActionTypes.USER_LOGIN.REQUEST)
    .switchMap((action) => {
      return UserService.login(action.data.username, action.data.password)
        .map((data) => ({
          type: ActionTypes.USER_LOGIN.SUCCESS
        }))
        .catch((error) => Observable.of({
          type: ActionTypes.USER_LOGIN.FAILURE,
          payload: { error },
          error: true
        }))
      }
  );
}
