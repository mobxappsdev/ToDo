import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Main from './app/screens/main/Main';


import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './app/redux/reducers/task/taskReducer';
import AppReducer from './app/redux/reducers/AppReducer';

const rootReducer = combineReducers({
  task:taskReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const Root =()=>
  <Provider store={store}>
    <Main/>
  </Provider>

AppRegistry.registerComponent('ToDo', () => Root);
