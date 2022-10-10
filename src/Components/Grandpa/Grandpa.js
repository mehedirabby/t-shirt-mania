import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './grandpa.css'
export const RingContext = createContext('Matir patil')

const Grandpa = () => {
    const [house,setHouse]=useState(1)
    // const ring="diamond ring"
    return (
        <RingContext.Provider value={[house,setHouse]}>
            <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ></Father>
                <Uncle  house={house}></Uncle>
                <Aunt  house={house}></Aunt>
            </section>
            </div>
        </RingContext.Provider>
        
    );
};

export default Grandpa;