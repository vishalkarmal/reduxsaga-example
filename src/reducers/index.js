// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import userReducer from './userReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  user:userReducer,
});

// Exports
export default rootReducer;