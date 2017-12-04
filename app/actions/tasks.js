import { ActionTypes } from 'constants/index';

export function fetchTasks() {
  return {
    type: ActionTypes.FETCH_TASKS.REQUEST
  }
}
