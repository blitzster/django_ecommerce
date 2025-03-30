import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function DashboardPage(){
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate("/login");
        }

        // fetch recent products
        axios.get("http://127.0.0.1:8000/api/products").then(response => {
            setProducts(response.data.slice(0, 5));

        }).catch(error => {
            console.error("Error fetching products", error);
        });
    }, [token, navigate]);

    
    
    return(
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>

            {/* Recommended Products */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Recommended for You</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map(product => (
                        <div key={product.id} className="border p-3 rounded-md shadow-md">
                            <h3 className="font-bold">{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Logout Button */}
            <button onClick={() => { 
                localStorage.clear(); 
                navigate("/login");
            }} 
            className="bg-red-500 px-4 py-2 rounded text-white">
                Logout
            </button>

        </div>
    );
}


export default DashboardPage;