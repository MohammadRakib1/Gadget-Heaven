import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {

    const links = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'font-bold text-white underline' : 'font-medium text-white'}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/statistics'
                className={({ isActive }) => isActive ? 'font-bold text-white underline' : 'font-medium text-white'}>
                Statistics
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/deshboard'
                className={({ isActive }) => isActive ? 'font-bold text-white underline' : 'font-medium text-white'}>
                Deshboard
            </NavLink>
        </li>
    </>

    return (
        <div className="navbar mt-4 max-w-7xl mx-auto bg-[#9538E2] rounded-t-xl px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-xl font-bold text-white">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <NavLink
                    to='/addToCard'
                    className={({ isActive }) => isActive ? 'p-3 rounded-full bg-slate-100' : 'p-3 rounded-full bg-white'}>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </NavLink>
                <NavLink
                    to='/wishlist'
                    className={({ isActive }) => isActive ? 'p-3 rounded-full bg-slate-100' : 'p-3 rounded-full bg-white'}>
                    <FaRegHeart></FaRegHeart>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;