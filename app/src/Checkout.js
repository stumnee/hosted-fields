import React from 'react'
import store from './Store'
import {observer} from 'mobx-react'

class Checkout extends React.Component {
    componentDidMount() {
        store.title = 'Checkout'
    }

    render() {
        return <div className="Checkout">
            <iframe src={store.vantivUrl}></iframe>
        </div>
    }
}

export default observer(Checkout)