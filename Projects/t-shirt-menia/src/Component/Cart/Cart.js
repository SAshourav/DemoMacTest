import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveCart}) => {
    let message;
    if(cart.length === 0) {
        message = <p>Please Buy at least one item</p>
    }else if(cart.length === 1){
        message = <div>
            <h3>Add another 2 tp reduce the delivery charge</h3>
            <h2>Before 20, after 10</h2>
        </div>
    }
    else{
        message = <p>Thanks For Buying</p>
    }
    return (
        <div>
            <h2 className={cart.length ===2 ? `orange` : `purple`}>Order Summery</h2>
            <h5 className={`bold ${cart.length === 2 ? `green` : `blue`}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=> {handleRemoveCart(tshirt)}}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Sotto</p>:<p>mittha</p>}
            <p>&& operator</p>
            {cart.length === 2 && <h2>Double Items</h2>}
            <p>|| operator</p>
            {cart.length === 1 || <h2>ektar beshi nile?</h2>}
        </div>
    );
};

export default Cart;

/*
Conditional rendering
1. use element in a variable and then use if else
2. ternary operator condition ? true : false
3. && operator (if condition is true, i wanna display something)
4. || operator (if condition is false, i wanna display something)
*/