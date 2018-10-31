import React from 'react'
import store from "./Store";
import {observer} from "mobx-react"
import {withRouter} from "react-router-dom"

class Cart extends React.Component {
    componentDidMount() {
        store.title = "Shopping Cart"
    }
    onCheckout(self) {
        let history = this.props.history

        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: 'total=' + store.cartTotal()
        }).then(res => res.text())
            .then((url)=>{
                store.vantivUrl = url
                history.push('/checkout')
            })
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

                <button onClick={this.onCheckout.bind(this)}>Proceed to checkout</button>
            </div>
        }


        return <div className="Cart">
            {items}


        </div>
    }
}

export default withRouter(observer(Cart))