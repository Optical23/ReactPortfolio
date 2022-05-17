import React from 'react';
import {Lead, Cover} from './CardElements';
function Card({delay}) {
    return ( 
        <div className='w-25 h-100 bg-primary position-relative'>
            <Lead style={{animationDelay: delay}}/>
            <Cover />
        </div> 
    );
}

export default Card;