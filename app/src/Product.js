import React  from 'react';

export default class Product extends React.Component {

    render() {
        const {id, name, img, price} = this.props.data

        return <div className="Product">
            <img className="product-image" alt="to be added" src={img} />
            <span className="product-name">{name}</span>
            <span className="product-price">{price}</span>
            {/*<button className="cart-add-button" onClick={this.props.addToCart.bind(this, id)}>Add to cart</button>*/}
            <svg className="cart-add-button" onClick={this.props.addToCart.bind(this, id)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm9.804-16.5l-3.431 12h-2.102l2.542-9h-5.993c.113.482.18.983.18 1.5 0 3.59-2.91 6.5-6.5 6.5-.407 0-.805-.042-1.191-.114l1.306 3.114h13.239l3.474-12h1.929l.743-2h-4.196zm-6.304 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-4.5-10.5c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/></svg>
            </div>
    }
}