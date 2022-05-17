import React from 'react';
import Card from './Card';

function Selector() {
    return ( 
    <div className='w-100 h-25 py-1'>
        <div className='w-75 m-auto h-100'>
            <div className='p-0 border h-100 d-flex'>
                <Card />
                <Card delay={'.25s'}/>
                <Card delay={'.5s'}/>
                <Card delay={'.75s'}/>
            </div>
        </div>
    </div> 
    );
}

export default Selector;