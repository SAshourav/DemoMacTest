import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const [house, setHouse] = useContext(RingContext); //this was deleard on grandfather
    return (
        <div>
            <h2>My self</h2>
            <p><small>{house}</small></p>
            <button onClick={()=> setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Myself;