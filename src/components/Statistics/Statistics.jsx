import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: 'UltraSlim Laptop Pro 15',
            Price: 1299.99,
            Total: 800,
            Rating: 4.7,
        },
        {
            name: 'MacBook Air 13',
            Price: 999.99,
            Total: 967,
            Rating: 4.5,
        },
        {
            name: 'Galaxy A12 Smartphone',
            Price: 899.99,
            Total: 1098,
            Rating: 4.6,
        },
        {
            name: 'NovaPhone Edge 10',
            Price: 749.99,
            Total: 1200,
            Rating: 4.4,
        },
        {
            name: 'FitWave Smart Watch X',
            Price: 249.99,
            Total: 1108,
            Rating: 4.5,
        },
        {
            name: 'PulseBand Active 2',
            Price: 149.99,
            Total: 680,
            Rating: 4.3,
        },
        {
            name: 'TurboCharge 65W Fast Charger',
            Price: 89.99,
            Total: 980,
            Rating: 4.4,
        },
        {
            name: 'QuickCharge Duo Wall Adapter',
            Price: 104.99,
            Total: 1180,
            Rating: 4.2,
        },
        {
            name: 'PowerMax 20000mAh Power Bank',
            Price: 59.99,
            Total: 1280,
            Rating: 4.2,
        },
        {
            name: 'MiniPower Slim 10000mAh',
            Price: 50.99,
            Total: 780,
            Rating: 4.3,
        },
        {
            name: 'ZenTab Studio 2-in-1',
            Price: 849.99,
            Total: 1780,
            Rating: 4.4,
        },
        {
            name: 'iConnect Smart Watch Mini',
            Price: 119.99,
            Total: 980,
            Rating: 4.1,
        },
    ];

    return (
        <div className='max-w-7xl mx-auto justify-center flex my-10'>
            <ComposedChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Price" stroke="#ff7300" />
                <Area type="monotone" dataKey="Rating" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Total" barSize={20} fill="#413ea0" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;