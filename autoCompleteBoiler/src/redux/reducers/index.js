import { combineReducers } from 'redux';

import { setUsersReducer } from './setUsersReducer';
import { setActiveUserReducer } from './setActiveUserReducer';

export const reducers = combineReducers({
    users: setUsersReducer,
    activeUser: setActiveUserReducer,
});
