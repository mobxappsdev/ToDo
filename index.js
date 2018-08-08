import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import Main from './app/screens/main/Main';


import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './app/redux/reducers/AppReducer';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['task']
}

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
)

const Root =()=>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
     <Main/>
   </PersistGate>
  </Provider>

AppRegistry.registerComponent('ToDo', () => Root);
