import { combineReducers } from 'redux';

import userReducer from './user/reducer';

export const rootReducer: any = combineReducers({
  user: userReducer as any,
});
