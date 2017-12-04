import { ActionTypes } from 'constants/index';

export function goTo(pathname: string, options: Object = {}) {
  return {
    type: ActionTypes.LOCATION_CHANGE,
    action: 'PUSH',
    location: {
      pathname,
      search: options.search,
      state: options.state,
    }
  };
}
