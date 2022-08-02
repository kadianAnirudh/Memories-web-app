// import React from 'react';
// import ReactDOM from 'react-dom';



// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from 'react-dom';
import React from 'react'
import { Provider } from 'react-redux'
import App from './App';
import './index.css';
import {  applyMiddleware, compose } from 'redux';
// import configureStore from "store";
import { createStore } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
// const store = createStore(reducers, )

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);