import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl font-bold">MyStore</Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to='/' className="hover:text-gray-200">Home</Link>
                    <Link to='/cart' className="hover:text-gray-200">Cart</Link>
                    <Link to='/dashboard' className="hover:text-gray-200">Dashboard</Link>
                    <Link to='/login' className="hover:text-gray-200">Login</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}


export default Navbar;