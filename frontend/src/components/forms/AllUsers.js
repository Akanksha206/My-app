// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import Navbar from '../../routes/Navbar';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Dummy data
        const dummyUsers = [
            { id: 1, name: 'John Doe', email: 'john.doe@example.com', address: '123 Main St', role: 'Admin' },
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', address: '456 Maple Ave', role: 'Normal User' },
            { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', address: '789 Oak Dr', role: 'Normal User' },
            { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', address: '321 Pine St', role: 'Admin' },
        ];
        
        setUsers(dummyUsers);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-8">User List</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Address</th>
                                <th className="py-2 px-4 border-b">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="py-2 px-4 border-b">{user.name}</td>
                                    <td className="py-2 px-4 border-b">{user.email}</td>
                                    <td className="py-2 px-4 border-b">{user.address}</td>
                                    <td className="py-2 px-4 border-b">{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserList;
