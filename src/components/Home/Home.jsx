import React from 'react';
import Gadgets from '../Gadgets/Gadgets';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <div className='flex justify-center'>
                <Category></Category>
                <Gadgets></Gadgets>
            </div>
        </div>
    );
};

export default Home;