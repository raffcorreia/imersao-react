import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


const page404 = () => (<div>oops this is a 404 ... <br/>:'(</div>)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route component={page404} />
        </Switch>
    </BrowserRouter>,

  document.getElementById('root')
);
 