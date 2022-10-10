import React from 'react';
import Special from '../Special/Special';


const MySelf = ({house,ring}) => {
    
    return (
        <div>
            <h2>My Self</h2>
            <p><small>House:{house}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;