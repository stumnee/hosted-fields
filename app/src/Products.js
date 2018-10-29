import React from 'react'
import Product from "./Product";
import store from './Store'
import {observer} from 'mobx-react'

class Products extends React.Component {
    componentDidMount(){
        store.title = "Products"
    }

    addToCart(id) {
        store.addToCart(id)
    }

    render() {
        const products = store.products.map(product=><li key={product.id}><Product data={product} addToCart={this.addToCart}/></li>)

        return <ul className="Products">{products}</ul>
    }
}

export default observer(Products)