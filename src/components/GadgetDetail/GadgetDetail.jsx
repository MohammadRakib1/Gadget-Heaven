import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../../utility/addToDb';

const GadgetDetail = () => {

    const { product_id } = useParams();
    const id = parseInt(product_id);

    const data = useLoaderData();
    console.log(data)

    const product = data.find(product => product.product_id === id);

    const { product_id: currentBookId, product_image, price, availability, description, specification, rating, product_title } = product;

    const handleAddToCard = (id) => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
    }


    return (
        <div className='max-w-7xl mx-auto my-12'>
            <h2 className='font-bold text-3xl text-center'>Product Details</h2>
            <p className='text-center mt-3'>Explore the latest gadgets that will take your experience to the next level.
                From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className="card lg:card-side bg-base-100 mt-8 border-2">
                <figure className='h-96 p-6'>
                    <img
                        src={product_image}
                        alt="image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <h5 className="card-title">Price: {price}</h5>
                    <div>
                        <p className='my-3'><span className='border border-[#309C08] py-1 px-4 text-[#309C08] bg-[#309C081A] rounded-full'>{availability}</span></p>
                        <p className='my-3 text-[#09080F99]'>{description}</p>
                        <p className='font-bold my-3'>specification</p>
                        <p className='text-[#09080F99]'>
                            {
                                specification.map((specific, index) => <li key={index}>{specific}</li>)
                            }
                        </p>
                        <p className='text-[#09080F] my-3 font-bold'>Rating: {rating}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCard(product_id)} className="btn bg-[#9538E2] text-white rounded-full">Add To Card</button>
                        <button onClick={() => handleAddToWishList(product_id)} className="btn rounded-full">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetail;