import React from 'react';
import Bro from '../Bro/Bro';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house,ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <p><small>House:{house}</small></p>
            <section className='flex'>
                <MySelf house={house} ring={ring}></MySelf>
                <Bro house={house}></Bro>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;