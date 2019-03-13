import React, { Component } from 'react';
import {products} from './Data'


const ProductContext = React.createContext();

class Context extends Component {
 state={
    storeProducts: products
 }
 handleDetail = () => {
     console.log('Hello from detail')
 }
 addToCart = () => {
     console.log('hello from add  to cart')
 }
  render () {
    return (
        <ProductContext.Provider 
        value={{
            ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
        }}>
            {this.props.children}
        </ProductContext.Provider>
      
    )
}
}
const ProductConsumer = ProductContext.Consumer;

export {Context, ProductConsumer};