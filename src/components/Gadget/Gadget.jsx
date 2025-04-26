import React from 'react';

const Gadget = ({ gadget }) => {

    const { product_title, product_image, price } = gadget;

    return (
        <div className="card bg-base-100 border-2">
            <figure>
                <img
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}K</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;