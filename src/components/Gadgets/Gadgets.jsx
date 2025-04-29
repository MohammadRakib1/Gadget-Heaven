import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('./gadgetData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    console.log(gadgets)

    return (
        <div className='my-36'>
            <h2 className='text-center mb-12 font-bold text-5xl text-[#0B0B0B]'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;