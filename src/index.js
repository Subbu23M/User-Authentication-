import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from './Components/User/App';

import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

const store = configureStore();
console.log(store.getState());

// when we dispatch an action to store,we should subscribe to notify that state is updated
store.subscribe(function () {
  console.log(store.getState());
});

const rootElement = document.getElementById('root');

const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(jsx, rootElement);