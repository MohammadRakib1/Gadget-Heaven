import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { deleteBlog, getStoredReadList } from '../../utility/addToDb';
import CartDetails from '../CartDetails/CartDetails';

const Deshboard = () => {
    const [sort, setSort] = useState('');
    const [productList, setProductList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readProductList = allProducts.filter(product => storedReadListInt.includes(product.product_id))
        setProductList(readProductList);
    }, [])

    const handleSortByPrice = (sortType) => {
        setSort(sortType);

        if (sortType === 'Price') {
            const storedPriceList = [...productList].sort((a, b) => a.price - b.price);
            setProductList(storedPriceList);
        }
    }

    const handleDelete = (id) => {
        deleteBlog(id)
    }

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='text-center'>
                <h2 className='font-bold text-3xl'>Deshboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!</p>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex items-center justify-between my-8'>
                            <h2 className='font-bold'>Cart</h2>
                            <div className='flex items-center gap-5'>
                                <h2 className='font-bold'>Total Cost: 999.99</h2>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn m-1 rounded-full bg-[#9538E2] text-white">
                                        {
                                            sort ? `Sort by:${sort}` : 'Sort by'
                                        }
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li onClick={() => handleSortByPrice('Price')}><a>Price</a></li>
                                    </ul>
                                </div>
                                <button className='btn rounded-full bg-[#9538E2] text-white border-2 border-[#9538E2]'>Purchase</button>
                            </div>
                        </div>
                        <div>
                            {
                                productList.map(cart => <CartDetails handleDelete={handleDelete} deletable={true} cart={cart} key={cart.product_id}></CartDetails>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            {
                                productList.map(cart => <CartDetails cart={cart} key={cart.product_id}></CartDetails>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Deshboard;