import React from 'react';

const Reviewitems = (props) => {
    const{ name, quantity, key } = props.product;
    
    //console.log(props)
    const reviewItemStyle = { borderBottom:'1px solid red',
                                padding: '10px',
                                marginLeft: '200px'                            
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name} is review</h4>
    <p>Quantity : {quantity}</p>
    <br/>
    <button 
        className="main-button"
        onClick={() =>props.removeProduct(key)}
        >Remove Items</button>
        </div>
    );
};

export default Reviewitems;