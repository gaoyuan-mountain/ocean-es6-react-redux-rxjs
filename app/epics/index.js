import { combineEpics } from 'redux-observable';
import { userLogin } from './user';
import { fetchTasks } from './tasks';

export default combineEpics(
  userLogin,
  fetchTasks
);
