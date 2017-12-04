import { createReducer } from 'utils/helpers';
import { ActionTypes } from 'constants/index';

export const userState = {
  isAuthenticated: false,
  isRunning: false,
  rehydrated: false
};

export default {
  user: createReducer(userState, {
    [ActionTypes.USER_LOGIN.REQUEST](state) {
      return {
        ...state,
        isRunning: true
      };
    },
    [ActionTypes.USER_LOGIN.SUCCESS](state) {
      return {
        ...state,
        isAuthenticated: true,
        isRunning: false
      };
    }
  })
};
