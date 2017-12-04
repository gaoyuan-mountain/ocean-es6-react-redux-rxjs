import { Observable } from 'rxjs/Observable';
import Fetch from 'utils/fetch';

const TaskService = {
  fetchTasks() {
    return Observable.fromPromise(Fetch.get('/api/tasks'));
  }
};

export default TaskService;