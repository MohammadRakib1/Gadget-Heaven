import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {

    return (
        <div className='mt-[240px] w-2/6 h-[395px] text-center mr-6 border py-6 rounded-xl'>
            <NavLink
                to='products'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] btn rounded-full mb-4 text-white' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                All Products
            </NavLink><br />
            <NavLink
                to='laptops'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white btn rounded-full mb-4' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                Laptops
            </NavLink><br />
            <NavLink
                to='smartWatches'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white btn rounded-full mb-4' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                Smart Watches
            </NavLink><br />
            <NavLink
                to='phones'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white btn rounded-full mb-4' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                Phones
            </NavLink><br />
            <NavLink
                to='PhoneCharger'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white btn rounded-full mb-4' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                Phone Charger
            </NavLink><br />
            <NavLink
                to='powerBank'
                className={({ isActive }) => isActive ? 'bg-[#9538E2] text-white btn rounded-full mb-4' :
                    'bg-[#09080F0D] text-[#09080F99] btn rounded-full mb-4'}>
                Power Bank
            </NavLink>
        </div>
    );
};

export default Category;