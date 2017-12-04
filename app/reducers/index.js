import app from './app';
import tasks from './tasks';
import router from './router';
import user from './user';

export default {
  ...app,
  ...tasks,
  ...router,
  ...user
};
