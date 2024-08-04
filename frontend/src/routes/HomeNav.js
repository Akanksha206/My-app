
import React from 'react';
import { Link } from 'react-router-dom';

const NavHome = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/home" >Fake Store</Link></div>
                <div className="space-x-4">
                    <Link to="/profile" className="text-white">Profile</Link>
                    <Link to="/login" className="text-white">Logout</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavHome;
