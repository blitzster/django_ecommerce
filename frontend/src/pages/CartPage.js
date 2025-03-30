import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="border-b py-3 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-3" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">${item.price} x {item.quantity}</p>
                                    </div>
                                </div>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                    onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-5 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                        onClick={clearCart}>
                        Clear Cart
                    </button>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartPage;
