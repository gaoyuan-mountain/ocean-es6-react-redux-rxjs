import TaskService from 'services/task';
import { ActionTypes } from 'constants';

export function fetchTasks(action$) {
  return action$.ofType(ActionTypes.FETCH_TASKS.REQUEST)
    .switchMap(() =>  {
      return TaskService.fetchTasks()
        .map(data => ({
          type: ActionTypes.FETCH_TASKS.SUCCESS,
          payload: {
            data: data.data
          }
        }))
        .defaultIfEmpty({ type: ActionTypes.FETCH_TASKS.FAILED })
        .catch((error) => Observable.of({
            type: ActionTypes.FETCH_TASKS.FAILED,
            payload: { message: error.message, status: error.status },
            error: true
        }))
      }
  );
}
