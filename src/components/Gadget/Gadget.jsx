import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {

    const { product_id, product_title, product_image, price } = gadget;

    return (
        <div className="card bg-base-100 border-2">
            <figure className='p-6'>
                <img
                    className='h-48'
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#09080F] font-semibold">{product_title}</h2>
                <p className='text-[#09080F99] font-medium'>Price: {price}K</p>
                <div className="card-actions">
                    <Link to={`/gadgets/${product_id}`}>
                        <button
                            className="btn border-2 border-[#9538E2] font-bold rounded-full text-[#9538E2]">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;