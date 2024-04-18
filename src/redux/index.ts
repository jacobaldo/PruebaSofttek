import {combineReducers} from 'redux';
import RegisterReducer from './Register/RegisterReducer';

export default combineReducers({
  registerReducer: RegisterReducer,
});

export type RootState = ReturnType<typeof combineReducers>;
