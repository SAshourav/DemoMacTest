import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house, setHouse] = useContext(RingContext); 
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>house: {house}</small></p>
            <button onClick={()=> setHouse(house-1)}>decrease</button>
        </div>
    );
};

export default Uncle;