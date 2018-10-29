import React from 'react'
import {Link} from "react-router-dom";
import store from "./Store";
import {observer} from "mobx-react"

class Cart extends React.Component {
    componentDidMount() {
        store.title = "Shopping Cart"
    }
    onCheckout() {
        let formData = new FormData();
        formData.append('total', store.cartTotal());
        fetch('/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: 'total=' + store.cartTotal()
        }).then(res => res.text())
            .then(url=>store.vantivUrl = url)
    }

    render() {
        const inCartItems = store.inCart.map((product, idx)=><tr key={idx}>
                <td><img src={product.img} alt={"to be added"} /></td>
            <td>{product.name}</td>
            <td className="price">{product.price}</td>
        </tr>)

        var items = <div>No items added</div>

        if (inCartItems.length > 0) {
            inCartItems.push(<tr key="100"><td>&nbsp;</td><td>Total</td><td className="price">{store.cartTotal()}</td></tr>)
            items = <div>
                <table className="cart-items"><tbody>{inCartItems}</tbody></table>

                <button onClick={this.onCheckout}>Proceed to checkout</button>
            </div>
        }


        return <div className="Cart">
            {items}


        </div>
    }
}

export default observer(Cart)