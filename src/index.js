import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers.js'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({searchRobots, requestRobots})
const logger = createLogger();//middleware
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger)) //it should be rootReducer



	//provider component will take care of passing down the store to all the components 
	//down the componet tree from the app {connect} will finish this connection
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
