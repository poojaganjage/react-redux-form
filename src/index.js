import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
//import reducers from './reducers/reducers';
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  // Other Reducers also come inside here.
  form: formReducer
})

const store = configureStore({reducer: rootReducer}, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);
