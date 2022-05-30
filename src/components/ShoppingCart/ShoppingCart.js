import React from 'react'
import ProductList from '../ProductList/ProductList'
import Cart from '../Cart/Cart'
import './ShoppingCart.css'
export default function ShoppingCart() {
    return (
        <div className="shopping__card">
            <ProductList />
            <Cart />
        </div>
    )
}