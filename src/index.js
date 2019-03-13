import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Context} from './Context';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'

ReactDOM.render(
    <Context>
        <Router>
         
            <Switch>
              <Route exact path="/" component={App}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
            </Switch>
        </Router>
    </Context>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
