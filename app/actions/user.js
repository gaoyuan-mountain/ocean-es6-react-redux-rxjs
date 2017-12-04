import { ActionTypes } from 'constants/index';

export function login(username, password) {
  return {
    type: ActionTypes.USER_LOGIN.REQUEST,
    data: {
      username,
      password
    }
  };
}
