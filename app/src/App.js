import React, {Component} from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart'
import Checkout from './Checkout'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import {observer} from "mobx-react"
import store from './Store'

class App extends Component {

    componentDidMount() {
        fetch('/products')
            .then(res => res.json())
            .then(products => store.products = products)

        setTimeout(()=>{
            console.log(store.products[0].id)
            store.addToCart(store.products[1].id)
            store.addToCart(store.products[1].id)
            store.addToCart(store.products[0].id)
        }, 500)
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header store={store}/>
                    <Route exact path="/" component={Products}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/checkout" component={Checkout}/>
                </div>
            </Router>
        );
    }
}

export default observer(App);
