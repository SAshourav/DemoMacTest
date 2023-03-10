import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
const Home = () => {
    const tShirt = useLoaderData();
    const [cart,setCart] = useState([])
    const handleAddToCart = tshirt => {
      const exists = cart.find(ts => ts._id === tshirt._id);
      if(exists){
        alert('t-shirt already exists');
      }else{
        const newCart = [...cart, tshirt];
        setCart(newCart);
      }
    }
    const handleRemoveCart = tshirt => {
      const remaining = cart.filter(ts => ts._id !== tshirt._id);
      setCart(remaining);
    }
    return (
        <div className='home-container'>
          <div className='t-shirt-container'>
            {
              tShirt.map(tshirt => <Tshirt
              key={tshirt._id}
              tshirt={tshirt}
              handleAddToCart = {handleAddToCart}
              ></Tshirt>)
            }
          </div>
          <div className='cart-container'>
            <Cart 
            cart={cart}
            handleRemoveCart={handleRemoveCart}></Cart>
          </div>
        </div>
    );
};

export default Home;<h2>This is Home</h2>