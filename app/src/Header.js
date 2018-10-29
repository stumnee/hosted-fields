import React from 'react'
import {Link} from "react-router-dom";
import {observer} from 'mobx-react'
import store from './Store'

 class Header extends React.Component {
    render() {
        var link = <Link to="/">Continue Shopping</Link>

        if (store.title == "Products") {
            link = <Link className="cart-link" to="/cart">Cart ${store.cartTotal()}</Link>
        }
        return <div className="Header">
            <div className="title">{store.title}</div>

            {link}


        </div>
    }

}

export default observer(Header)