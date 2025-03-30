import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function SignupPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try{
            await axios.post("http://127.0.0.1:8000/api/signup/", {username, password});
            alert("Signup successfull! Please Login");
            navigate('/login');
        }
        catch{
            alert("Signup Failed try different username");
        }
    };


    return(
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mg-5">Signup</h1>
            <input type="text" placeholder="Username" value={username}
            onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full rounded-md mb-2" />
            <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full rounded-md mb-2" />
            <button onClick={handleSignup} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Signup
            </button>


        </div>
        
    );
}


export default SignupPage;