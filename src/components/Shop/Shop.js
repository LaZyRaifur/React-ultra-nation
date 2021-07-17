import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Cart2 from '../Cart2/Cart2';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddProduct =(product) =>
    {
        console.log("added",product);
        const newCart = [...cart,product];
        setCart(newCart);

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart2 cart={cart}></Cart2>
            </div>
        </div>
    );
};

export default Shop;