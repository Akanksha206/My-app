// src/components/EditProfile.js
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from '../../routes/Navbar';
import NavHome from "../../routes/HomeNav";

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the user data and set it in the state
        const fetchUserData = async () => {
            // Replace this with actual user data fetching logic
            const userData = {
                name: "John Doe",
                address: "123 Main St",
            };
            setFormData({ ...formData, ...userData });
        };
        fetchUserData();
    }, []);

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                title: "Error!",
                text: "Passwords do not match",
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        }
        // Assume update profile logic here
        Swal.fire({
            title: "Success!",
            text: "Profile Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
        }).then((e) => {
            if (e.isConfirmed) {
                navigate("/dashboard");
            }
        });
    };

    return (
        <>
            <NavHome />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Edit Profile
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => onSubmit(e)} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => onChange(e)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    required
                                    value={formData.address}
                                    onChange={(e) => onChange(e)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => onChange(e)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => onChange(e)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
