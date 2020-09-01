import React, { useState } from 'react';
import fakeData from '../../fakeData';
import lap from '../../tests';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager.js'


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    //const [pro2] = useState(first5);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) =>{      
    const toBeAddedkey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedkey);
    let count = 1;
    let newCart;
    if (sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.find(pd => pd.key !== toBeAddedkey);
        newCart = [...others, sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
        setCart(newCart);
     addToDatabaseCart(product.key, count);
        // console.log('productAdded;');
    }
    
    //console.log(fakeData)
    //const first5 = lap.slice(0,5);
   // console.log(first5)
    return (
        <div className="twin-container">
            <div className="product-container">               
                    {
                        products.map(pd=><Product 
                            key={pd.key}
                            showAddToCart = {true}
                            handleAddProduct = {handleAddProduct}
                            product={pd}></Product>)
                    }                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>                    
            </div>
        </div>
    );
};

export default Shop;