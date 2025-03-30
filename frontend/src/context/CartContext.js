import React, {createContext, useState, useEffect} from "react";


//creating a cart context
export const CartContext = createContext();

//cart provider component
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart? JSON.parse(storedCart): [];
    });

    //update localstorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    //Add item to cart
    const addToCart = (product) => {
        const token = localStorage.getItem("token");
        if(!token){
            alert("Please login to add items to the cart!");
            return;
        }
        
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem){
                return prevCart.map((item) =>
                    item.id === product.id ? {...item, quantity:item.quantity + 1}: item 
                );
            }
            return [...prevCart, {...product, quantity: 1}];
        })
    };


    //Remove item from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));

    };

    //clear entire cart
    const clearCart = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );


};