import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    {/* Logo or Home Link */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="py-5 px-2 text-white text-lg font-bold hover:text-gray-200"
                        >
                            Home
                        </Link>
                    </div>

                    {/* Main Navigation Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/qrcode" className="py-5 px-3 text-white hover:text-gray-200">Qrcode</Link>
                        <Link to="/ProductsCard" className="py-5 px-3 text-white hover:text-gray-200">Products</Link>
                        <Link to="/Order" className="py-5 px-3 text-white hover:text-gray-200">Orders</Link>
                        <Link to="/Payment" className="py-5 px-3 text-white hover:text-gray-200">Payments</Link>
                        <Link to="/jwtregister" className="py-5 px-3 text-white hover:text-gray-200">JWTRegister</Link>
                        <Link to="/jwtlogin" className="py-5 px-3 text-white hover:text-gray-200">JWTSignIn</Link>
                        <Link to="/alogin" className="py-5 px-3 text-white hover:text-gray-200">Admin Login</Link>
                        <Link to="/ApiProducts" className="py-5 px-3 text-white hover:text-gray-200">API Products</Link>
                        <Link to="/Profile" className="py-5 px-3 text-white hover:text-gray-200">Profile</Link>
                        <Link to="/Cart" className="py-5 px-3 text-white hover:text-gray-200">Cart</Link>
                        <Link to="/ProductsList" className="py-5 px-3 text-white hover:text-gray-200">Product CRUD</Link>
                        <Link to="/OrderList" className="py-5 px-3 text-white hover:text-gray-200">Order List</Link>
                        <Link to="/UsersList" className="py-5 px-3 text-white hover:text-gray-200">Users List</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
