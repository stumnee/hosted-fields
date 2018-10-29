import {decorate, observable, computed} from "mobx"

class Store {
    title = "Products"
    vantivUrl = 'https://certtransaction.hostedpayments.com/?TransactionSetupID=D463DD73-B5E1-46D6-B1FE-99EBD461AF08'
    products = []
    inCart = []
    cartTotal = function() {
        return this.inCart.reduce(function(total, product) {
            return total + product.price
        }, 0)
    }

    addToCart = function(id) {
        const inCart = this.inCart;
      this.products.forEach((product) => {
          if (product.id === id) {
              inCart.push(product)
          }
      });
    }
}
decorate(Store, {
    title: observable,
    vantivUrl: observable,
    products: observable,
    inCart: observable,
    cartTotal: observable
})

export default new Store()

