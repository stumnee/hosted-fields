import React  from 'react';

export default class Product extends React.Component {

    render() {
        const {id, name, img, price} = this.props.data

        return <div className="Product">
            <img className="product-image" alt="to be added" src={img} />
            <span className="product-name">{name}</span>
            <span className="product-price">{price}</span>
            <button className="cart-add-button" onClick={this.props.addToCart.bind(this, id)}>Add to cart</button>
            </div>
    }
}