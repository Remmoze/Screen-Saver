import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import storage from "./redux/store";

import MainContainer from './components/MainContainer';

ReactDOM.render(
    <Provider store={storage}>
        <React.StrictMode>
            <MainContainer />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 