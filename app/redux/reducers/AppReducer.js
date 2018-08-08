import {combineReducers} from 'redux';
import taskReducer from './task/taskReducer';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const taskPersistConfig={
  key: 'task',
  storage,
  whitelist:['tasksList']
}

export default AppReducer = combineReducers({
  task:persistReducer(taskPersistConfig, taskReducer)
})
