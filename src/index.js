import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
    <Provider store={store}>
        {/*  Provider ensures that our entire React application can potentially access data from the store */}
        <App />
    </Provider> /* code change */,
  document.getElementById("root")
);
