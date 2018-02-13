import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route, Switch
} from 'react-router-dom';
import { App } from './components/App/App.jsx'
import './style.css'
import { Provider } from 'react-redux'
import store from './redux/store'
const FourOhFour = () => <h1>This page does not exist!! </h1>

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path="/" component={App} />
                <Route component={() => <FourOhFour/>} />
            </Switch>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);