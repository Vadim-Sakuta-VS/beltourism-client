import React from 'react';
import ReactDOM from 'react-dom';
import './normolize.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
