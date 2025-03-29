import React, {useEffect, useState} from "react";
import { getProducts } from "../services/api";

function Home(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getProducts();
                console.log("Fetched Products:", data);
                setProducts(data);
            }
            catch(error){
                console.error("Error fetching product", error);
            }
            
        }
        fetchData();
    }, []);

    
    
    return(
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.length >0 ?(
                    products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow bg-white">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="font-bold text-lg">${product.price}</p>
                        </div>
                    ))
                ):(
                    <p>No Products available</p>
                )}
            </div>
        </div>
    )
}


export default Home;