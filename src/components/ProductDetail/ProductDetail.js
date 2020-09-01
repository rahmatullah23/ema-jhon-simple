import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetail = () => {
    
    const {productKey}= useParams();
    const product = fakeData.find(prd=> prd.key === productKey)
    return (
        <div>
            <h1>{productKey}ProductDetail coming soooooon</h1>
            <Product  showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;