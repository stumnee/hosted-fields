import React from 'react'
import store from "./Store";
import {observer} from "mobx-react"
import {withRouter} from "react-router-dom"

class Complete extends React.Component {
    constructor() {
        super()
        this.state = { items: [] }
    }

    componentDidMount() {
        store.title = "Transaction Complete"
        store.inCart = []
        let search = this.props.location.search
        if (!!search) {
            // relay this request to backend
            // fetch('/Complete' + search)

            this.setState({items: search.substring(1).split('&')})
        }
        if (typeof window.parent.onCheckoutComplete === "function" ) {
            window.parent.onCheckoutComplete()
        }
    }
    render() {
        const items = this.state.items.map((item,idx)=><li key={idx}>{item}</li>)
        return <div className="Complete">
            <ul>
                {items}
            </ul>
        </div>
    }
}

export default withRouter(observer(Complete))