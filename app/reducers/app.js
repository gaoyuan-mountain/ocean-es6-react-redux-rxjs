import { createReducer } from 'utils/helpers';
import { ActionTypes } from 'constants';

export const appState = {
  rehydrated: false
};

export default {
  app: createReducer(appState, {
    
  })
};
