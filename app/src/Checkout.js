import React from 'react'
import store from './Store'
import {observer} from 'mobx-react'

class Checkout extends React.Component {
    constructor() {
        super()
        this.state = {test: 1}
    }
    componentDidMount() {
        store.title = 'Checkout'
        // store.vantivUrl = 'http://hostedfields/api/completed?HostedPaymentStatus=Complete&TransactionSetupID=8CC682B3-A708-4B36-B14A-FFCE6341F694&TransactionID=7261397&ExpressResponseCode=0&ExpressResponseMessage=Approved&AVSResponseCode=N&CVVResponseCode=M&ApprovalNumber=000054&LastFour=1111&ValidationCode=4E7E81CEEEE14AD6&CardLogo=Visa&ApprovedAmount=6.55&Bin=411111&Entry=Manual'
    }

    render() {
        return <div className="Checkout">
            <iframe src={store.vantivUrl} title="title"></iframe>
        </div>
    }
}

export default observer(Checkout)