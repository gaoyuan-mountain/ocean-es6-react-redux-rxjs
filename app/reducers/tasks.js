import { createReducer } from 'utils/helpers';
import { ActionTypes } from 'constants';

export const tasksState = {
  items: [],
  error: false,
  isReady: false,
  isLoading: false,
  rehydrated: false
};

export default {
  tasks: createReducer(tasksState, {
    [ActionTypes.FETCH_TASKS.REQUEST](state) {
      return {
        ...state,
        isLoading: true
      };
    },
    [ActionTypes.FETCH_TASKS.SUCCESS](state, action) {
      return {
        ...state,
        items: action.payload.data.tasks,
        error: false,
        isLoading: false,
        isReady: true
      };
    },
    [ActionTypes.FETCH_TASKS.FAILURE](state, action) {
      return {
        ...state,
        items: [],
        isLoading: false,
        isReady: false,
        error: true
      };
    },
  }),
};