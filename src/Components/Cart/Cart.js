import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveItem}) => {
    let message;
    if(cart.length===0){
        message=<p>Please buy at least one item</p>
    }
    else if(cart.length===1){
        message=<div>
            <p>Try another one</p>
        </div>

    }
    else{
        message= <p>Thanks for Buying</p>
    }
 
    return (
        <div>
            <h3 className={cart.length===2?`orange`:`purple`}>this is order summery{cart.length}</h3>
            {
                cart.map( tshirt=> <p>Name:{tshirt.name}
                    <button className='btn-dlt' onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length===3? <p>3 items selected</p>:<p>Try another item</p>}
            <p>and operator</p>
            
            {cart.length===2 && <h2>Double item</h2> }
            <p>or operator</p>
            {cart.length ===4 || <p>Not 4 items</p>}
           
        </div>
    );
};

export default Cart;
/*
    conditional rendering
        1.use element ain a variable and then use if-else to set value
        2.ternary operation condition? true:false
        3.&& operator(if condition is true , i want to display something)
        4.|| operator(if condition is false,i want to play something)
*/ 