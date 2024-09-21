import React, { useState } from 'react';
import Logo from "../../assets/snaplogo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#EEE]">
            <div className="w-full flex flex-col gap-10 max-w-md bg-white p-10 rounded-lg shadow-md text-[#303841]">
                <div className='w-full flex items-center justify-center'>
                    <img className='h-8' src={Logo} alt="" />
                </div>

                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#F6C90E]"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-lg font-medium">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#F6C90E] pr-10"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute bottom-0 right-4 transform -translate-y-1/2 cursor-pointer text-[#303841]"
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#F6C90E] hover:bg-[#FFCE00] text-white p-3 rounded-md mt-4 font-semibold"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center">
                    <a href="/admin/forgot-password" className="text-sm text-[#F6C90E] hover:underline">Forgot Password?</a>
                </div>
            </div>
        </div>
    );
}
