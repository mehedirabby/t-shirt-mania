import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'


const Home = () => {
    

    const tshirts= useLoaderData();
    const [cart,setCart]=useState([])
    const handleAddToCart = tshirt=>{
        const exist = cart.find(ts=>ts._id===tshirt._id);
        if(exist){
            alert('t-shirt already adddeded')
        }
        else{
            const newCart = [...cart,tshirt]
            setCart(newCart)
            

        }
        
        
    }
    const handleRemoveItem = tshirt=>{
        const remining=cart.filter(ts=>ts._id!== tshirt._id);
        setCart(remining)
    }
    return (
        <div className='home-container'>
            
            <div className="shirt-container">
            {
                tshirts.map(tshirt=><TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;