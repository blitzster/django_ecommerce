import React, { use, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";


function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();  // ✅ Prevent form from refreshing
    
        try {
            const response = await fetch("http://127.0.0.1:8000/api/login/", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                localStorage.setItem("token", data.access);
                localStorage.setItem("username", data.username);
                alert("Login Successful!");
                navigate("/");
            } else {
                alert(data.error || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in.");
        }
    };
    

    return(
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">Login</h1>
            <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full rounded-md mb-2"/>
            <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full rounded-md mb-2"/>
            <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Login
            </button>

        </div>

    );
}


export default LoginPage;