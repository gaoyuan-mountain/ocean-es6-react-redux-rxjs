function actionGenerator(key) {
  return {
    REQUEST: key,
    SUCCESS: `${key}_SUCCESS`,
    FAILED: `${key}_FAILED`
  };
}

export const ActionTypes = {
  USER_LOGIN: actionGenerator('USER_LOGIN'),
  FETCH_TASKS: actionGenerator('FETCH_TASKS'),
  XHR: actionGenerator('XHR'),
  LOCATION_CHANGE: '@@router/LOCATION_CHANGE'
}

