import React from 'react';
import Navbar from './Navbar';
import Selector from './Selector';
function Page() {
    return ( 
        <div className='p-0 m-0 vh-100'>
            <Navbar />
            <Selector/>
        </div>
    );
}

export default Page;