import React from 'react';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='text-center my-36'>
                <h2 className='text-2xl font-bold'>Page not found</h2>
                <p>status: 404</p>
            </div>
        </div>
    );
};

export default ErrorPage;