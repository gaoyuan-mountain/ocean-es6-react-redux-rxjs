import { Observable } from 'rxjs/Observable';
import Fetch from 'utils/fetch';

const UserService = {
  login(username, password) {
    return Observable.fromPromise(Fetch.post('/api/login', {
      username,
      password
    }));
  }
};

export default UserService;