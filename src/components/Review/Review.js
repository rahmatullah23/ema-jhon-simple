import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitems from '../ReviewItems/Reviewitems';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([])
    const removeProduct = (productKey)=>{
        const newCart = cart.filter(pd=> pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);


    } 
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
       
        //const count = productKey.map(key =>savedCart[key]);
        const cartProducts = productKey.map(key =>{
            const product = fakeData.find(pd=> pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        //console.log(cartProducts);
    },[])
    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd=><Reviewitems
                     cart={cart} 
                     removeProduct={removeProduct} 
                     key={pd.key} product={pd} ></Reviewitems>)
            }
            </div>
           
            <div className="cart-container">                
                <Cart cart={cart}></Cart>                    
            </div>
        </div>
    );
};

export default Review;