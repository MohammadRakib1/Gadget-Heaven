import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/banner.jpg';


const Banner = () => {
    return (
        <div>
            <div className="py-20 bg-[#9538E2] min-h-[calc(100vh-116px)] rounded-b-xl">
                <div className="text-center">
                    <div>
                        <h2 className="text-5xl text-white font-bold">Upgrade Your Tech Accessorize with <br />
                            Gadget Heaven Accessories</h2>
                        <p className="py-6 text-white">
                            Explore the latest gadgets that will take your experience to the next level.
                            From smart devices to <br /> the coolest accessories, we have it all!</p>
                        <Link to='/deshboard'><button className="btn btn-white rounded-full font-bold text-[#9538E2]">Shop Now</button></Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center relative'>
                <img className='w-1/2 rounded-xl static -mt-52 border-4 p-4 bg-[#FFFFFF4D]' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;