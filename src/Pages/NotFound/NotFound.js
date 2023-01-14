import React from 'react';
import notFound from '../../assets/404.svg'

const NotFound = () => {
    return (
        <div className='flex align-center'>
<div>
           <h2 className='text-5xl text-red-600'>This page is not available</h2>
           <p>You may need permission to access this page.</p>
        </div>
        <div>
            <img src={notFound}></img>
        </div>

        </div>
    );
};

export default NotFound;