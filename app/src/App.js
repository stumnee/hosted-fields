import React, {Component} from 'react'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import Checkout from './Checkout'
import Complete from './Complete'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import {observer} from "mobx-react"
import store from './Store'

class App extends Component {

    componentDidMount() {
        fetch('/api/products')
            .then(res => res.json())
            .then(products => store.products = products)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    {/*<Route path="/(|cart|checkout)" component={Header}/>*/}
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Products}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/complete" component={Complete}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default observer(App);
