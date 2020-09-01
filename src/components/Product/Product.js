import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, img, seller, price, stock, key } = props.product;
    // const proto = props.pro2;
    //console.log(props)
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
    {/* //<p> thanks {proto}</p> */}
                <br/>
                <p><small>Only {stock} in stock -buy soon</small></p>
                {props.showAddToCart && <button 
                className="main-button" 
                onClick = {()=>props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />  Add to cart
                    </button>}
            </div>


        </div>
    );
};

export default Product;