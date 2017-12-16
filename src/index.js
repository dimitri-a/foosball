import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import foosballApp from "./reducers/index";
import {createStore} from "redux";
import {createProvider as Provider} from "react-redux";

const store = createStore(foosballApp);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();