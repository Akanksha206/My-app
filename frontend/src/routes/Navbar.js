
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/dashboard" >Admin Dashboard</Link></div>
                <div className="space-x-4">
                    <Link to="/add-store" className="text-white">Add Store</Link>
                    <Link to="/add-user" className="text-white">Add Normal User</Link>
                    <Link to="/login" className="text-white">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
