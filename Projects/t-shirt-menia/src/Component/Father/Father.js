import React from 'react';
import Bro from '../Bro/Bro';
import Myself from '../Myself/Myself';

const Father = ({house}) => {
    return (
        <div>
            <h2>Father</h2>
            <p><small>{house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Bro house={house}></Bro>
            </section>
        </div>
    );
};

export default Father;