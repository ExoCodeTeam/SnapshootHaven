import React, { useState } from 'react';
import Logo from "../../assets/snaplogo.svg";

export default function PasswordReset() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add password reset logic here (API call, form validation, etc.)
        console.log({ email });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full flex flex-col gap-10 max-w-md bg-white p-8 rounded-lg shadow-md text-[#303841]">
                <div className='w-full flex items-center justify-center'>
                    <img className='h-8' src={Logo} alt="Logo" />
                </div>

                <h1 className="text-2xl font-bold text-center">Reset Password</h1>
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
                    <button
                        type="submit"
                        className="w-full bg-[#F6C90E] hover:bg-[#FFCE00] text-white p-3 rounded-md mt-4 font-semibold"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center">
                    <a href="/admin" className="text-sm text-[#F6C90E] hover:underline">Back to Login</a>
                </div>
            </div>
        </div>
    );
}
