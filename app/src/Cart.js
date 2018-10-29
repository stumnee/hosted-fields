import React from 'react'
import {Link} from "react-router-dom";
import store from "./Store";
import {observer} from "mobx-react"

class Cart extends React.Component {
    componentDidMount() {
        store.title = "Shopping Cart"
    }
    render() {
        const inCartItems = store.inCart.map(product=><tr key={product.id}>
                <td><img src={product.img} alt={"to be added"} /></td>
            <td>{product.name}</td>
            <td className="price">{product.price}</td>
        </tr>)

        var items = <div>No items added</div>

        if (inCartItems.length > 0) {
            inCartItems.push(<tr><td>&nbsp;</td><td>Total</td><td className="price">{store.cartTotal()}</td></tr>)
            items = <div>
                <table className="cart-items">{inCartItems}</table>

                <button>Proceed to checkout</button>
            </div>
        }


        return <div className="Cart">
            {items}


        </div>
    }
}

export default observer(Cart)