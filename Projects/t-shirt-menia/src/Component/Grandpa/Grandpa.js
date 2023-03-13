import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('diamond ring')
const Grandpa = () => {
    const [house, setHouse] = useState(1);

    return (
        <div className='grandpa'>
            <RingContext.Provider value={[house, setHouse]}>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Anty house={house}></Anty>
                </section>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;