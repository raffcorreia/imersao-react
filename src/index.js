import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


const page404 = () => (<div>oops this is a 404 ... <br/>:'(</div>)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/cadastro/video" component={CadastroVideo} exact />
            <Route path="/cadastro/Categoria" component={CadastroCategoria} exact />
            <Route component={page404} />
        </Switch>
    </BrowserRouter>,

  document.getElementById('root')
);
 