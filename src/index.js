import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import mySaga from './sagas/rootsaga';
import reducers from './reducers/mainReducer';

const sagaMiddleware = createSagaMiddleware();

// mount it on the store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga);

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter> 
  </Provider>,
  rootElement);
