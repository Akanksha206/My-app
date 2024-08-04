// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import Navbar from '../../routes/Navbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState({
        totalUsers: 4,
        totalStores: 200,
        totalRatings: 200
    });


    return (
        <>
        <Navbar />
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Welcome Admin</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <Link to="/all-users">
                    <h2 className="text-xl font-semibold mb-2">Total Users</h2>
                    <p className="text-2xl">{data.totalUsers}</p>
                    </Link>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Total Stores</h2>
                    <p className="text-2xl">{data.totalStores}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Total Users Submitted Rating</h2>
                    <p className="text-2xl">{data.totalRatings}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
