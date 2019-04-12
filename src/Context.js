import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products: storeProducts,
        detailProduct
    }

    handleDetails = () => {
        console.log("hello from details")
    }

    addToCart = () => {
        console.log("Hello from  add to cart")
    }

    render() {
        return(
            <ProductContext.Provider value={{ //value can be object or string, this can be passdown to another component
                ...this.state,
                handleDetails:this.handleDetails,
                addToCart:this.addToCart
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider,
    ProductConsumer
}