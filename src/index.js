//import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // bridge piece to connect redux to react

//import reducers
import { carSalesReducer } from './reducers/carSalesReducer';

//import files
import App from './App';

//import styles
import 'bulma/css/bulma.css';
import './styles.scss';

// STEP 1 - create the redux store and connect it to our React app
const store = createStore(carSalesReducer);
console.log('current state: ', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 rootElement);
