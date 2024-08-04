// src/components/Home.js
import React, { useState, useEffect } from 'react';
import NavHome from '../../routes/HomeNav';

const Home = () => {
    const [stores, setStores] = useState([]);
    const [filteredStores, setFilteredStores] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        email: '',
        address: '',
        rating: ''
    });

    useEffect(() => {
        // Dummy data with images
        const dummyStores = [
            { id: 1, name: 'Store One', address: '123 Main St', email: 'owner1@example.com', rating: 3, imageUrl: 'https://via.placeholder.com/150' },
            { id: 2, name: 'Store Two', address: '456 Maple Ave', email: 'owner2@example.com', rating: 4, imageUrl: 'https://via.placeholder.com/150' },
            { id: 3, name: 'Store Three', address: '789 Oak Dr', email: 'owner3@example.com', rating: 2, imageUrl: 'https://via.placeholder.com/150' },
            { id: 4, name: 'Store Four', address: '321 Pine St', email: 'owner4@example.com', rating: 5, imageUrl: 'https://via.placeholder.com/150' },
            { id: 5, name: 'Store Five', address: '654 Elm St', email: 'owner5@example.com', rating: 1, imageUrl: 'https://via.placeholder.com/150' },
            { id: 6, name: 'Store Six', address: '987 Cedar Ln', email: 'owner6@example.com', rating: 4, imageUrl: 'https://via.placeholder.com/150' },
            { id: 7, name: 'Store Seven', address: '111 Birch Blvd', email: 'owner7@example.com', rating: 3, imageUrl: 'https://via.placeholder.com/150' },
            { id: 8, name: 'Store Eight', address: '222 Spruce St', email: 'owner8@example.com', rating: 5, imageUrl: 'https://via.placeholder.com/150' },
            { id: 9, name: 'Store Nine', address: '333 Fir Ave', email: 'owner9@example.com', rating: 2, imageUrl: 'https://via.placeholder.com/150' },
            { id: 10, name: 'Store Ten', address: '444 Willow Way', email: 'owner10@example.com', rating: 4, imageUrl: 'https://via.placeholder.com/150' },
        ];

        setStores(dummyStores);
        setFilteredStores(dummyStores);
    }, []);

    const handleRatingChange = (storeId, rating) => {
        const updatedStores = stores.map((store) =>
            store.id === storeId ? { ...store, rating } : store
        );
        setStores(updatedStores);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    useEffect(() => {
        const filterStores = () => {
            let tempStores = stores;

            if (filters.name) {
                tempStores = tempStores.filter(store =>
                    store.name.toLowerCase().includes(filters.name.toLowerCase())
                );
            }

            if (filters.email) {
                tempStores = tempStores.filter(store =>
                    store.email.toLowerCase().includes(filters.email.toLowerCase())
                );
            }

            if (filters.address) {
                tempStores = tempStores.filter(store =>
                    store.address.toLowerCase().includes(filters.address.toLowerCase())
                );
            }

            setFilteredStores(tempStores);
        };

        filterStores();
    }, [filters, stores]);

    return (
        <>
            <NavHome />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-8">Stores</h1>
                <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Filter by name"
                    />
                    <input
                        type="text"
                        name="email"
                        value={filters.email}
                        onChange={handleFilterChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Filter by email"
                    />
                    <input
                        type="text"
                        name="address"
                        value={filters.address}
                        onChange={handleFilterChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Filter by address"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredStores.map((store) => (
                        <div key={store.id} className="bg-white shadow-md rounded-lg p-6">
                            <img src={store.imageUrl} alt={store.name} className="w-full h-40 object-cover rounded mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{store.name}</h2>
                            <p className="text-gray-700 mb-2">{store.address}</p>
                            <p className="text-gray-700 mb-4">{store.email}</p>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`w-6 h-6 cursor-pointer ${
                                            star <= store.rating ? 'text-yellow-500' : 'text-gray-300'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => handleRatingChange(store.id, star)}
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.785a1 1 0 00.95.69h3.985c.969 0 1.371 1.24.588 1.81l-3.225 2.334a1 1 0 00-.364 1.118l1.234 3.785c.3.921-.755 1.688-1.54 1.118l-3.225-2.334a1 1 0 00-1.175 0l-3.225 2.334c-.784.57-1.838-.197-1.539-1.118l1.233-3.785a1 1 0 00-.364-1.118L2.528 9.212c-.783-.57-.38-1.81.588-1.81h3.985a1 1 0 00.95-.69l1.234-3.785z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
