import React from 'react';

const CartDetails = ({ cart, handleDelete }) => {
    const { product_image, price, description, product_title, product_id } = cart;

    return (
        <div className="card card-side bg-base-100 border-2 my-8">
            <figure className='p-6'>
                <img
                    className='h-36'
                    src={product_image}
                    alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <p>Price: {price}k</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(product_id)} className="btn btn-primary">X</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;