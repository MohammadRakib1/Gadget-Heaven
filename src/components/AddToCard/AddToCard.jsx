import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../utility/addToDb';
import CartDetails from '../CartDetails/CartDetails';

const AddToCard = () => {
    const [productAddList, setProductList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allProducts);
        const productList = allProducts.filter(product => storedReadListInt.includes(product.product_id))
        setProductList(productList)
    }, [])

    return (
        <div className='max-w-7xl mx-auto'>
            <h2>Add To Card: {productAddList.length}</h2>
            {
                productAddList.map(cart => <CartDetails cart={cart} key={cart.product_id}></CartDetails>)
            }
        </div>
    );
};

export default AddToCard;