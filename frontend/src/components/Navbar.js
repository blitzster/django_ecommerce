import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar(){
    const navigate = useNavigate();
    const {cart} = useContext(CartContext);

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
    }



    return(
        <nav className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/' className="text-2xl font-bold">MyStore</Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to='/' className="hover:text-gray-200">Home</Link>
                    
                    <Link to='/dashboard' className="hover:text-gray-200">Dashboard</Link>
                    


                    {/* cart link with item count */}
                    <Link to='/cart' className="relative hover:text-gray-200">
                    🛒 Cart <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-1">
                            {cart.length}
                        </span>
                    </Link>

                    {/* Login / Logout Button */}
                    {token? (
                        <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-700 transition">
                            Logout
                        </button>
                    ) : (
                        <Link to='/login' className="hover:text-gray-200">Login</Link>
                    )}
                    
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