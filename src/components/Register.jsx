import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [errormssg, seterrorMssg] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        if (!username || !email || !password || !cpassword) {
            return { valid: false, message: "Please fill all the fields" };
        }
        if (username.length < 4) {
            return { valid: false, message: "Username must be at least 4 characters" };
        }
        if (password !== cpassword) {
            return { valid: false, message: "Password and Confirm Password do not match" };
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        if (!passwordRegex.test(password)) {
            return {
                valid: false,
                message: "Password must be at least 6 characters and include: 1 uppercase letter - 1 number - 1 special character",
            };
        }
        return { valid: true };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validateForm();
        if (!validation.valid) {
            seterrorMssg(validation.message);
            return;
        }

        const data = { username, email, password };
        console.log(data);

        setUserName('');
        setCPassword('');
        setEmail('');
        setPassword('');
        alert("Registration Successful");

        setTimeout(() => {
            navigate('/Login', {
                state: { message: "Registration Successful, Please Login" },
            });
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-all'>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-gray-800 dark:text-white text-gray-500 max-w-[340px] w-full mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 transition-all"
                >
                    <h2 className="text-2xl font-bold mb-9 text-center text-blue-500">Create Your Account!!</h2>

                    {/* Username */}
                    <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 dark:border-gray-500/30 rounded gap-1 pl-2 dark:bg-gray-700">
                        <svg width='18' height='18' opacity='40%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="text-gray-500 dark:text-white">
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
                        </svg>
                        <input
                            className="w-full outline-none bg-transparent px-2 py-2.5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center my-2 border bg-indigo-500/5 border-gray-500/10 dark:border-gray-500/30 rounded gap-1 pl-2 dark:bg-gray-700">
                        <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 dark:text-white">
                            <path d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                        <input
                            className="w-full outline-none bg-transparent px-2 py-2.5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 dark:border-gray-500/30 rounded gap-1 pl-2 dark:bg-gray-700">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 dark:text-white">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
                        </svg>
                        <input
                            className="w-full outline-none bg-transparent px-2.5 py-2.5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="flex items-center mt-2 mb-4 border bg-indigo-500/5 border-gray-500/10 dark:border-gray-500/30 rounded gap-1 pl-2 dark:bg-gray-700">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 dark:text-white">
                            <path d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z" />
                        </svg>
                        <input
                            className="w-full outline-none bg-transparent px-2.5 py-2.5 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            type="password"
                            placeholder="Confirm Password"
                            value={cpassword}
                            onChange={(e) => setCPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Error Message */}
                    {errormssg && (
                        <div className='text-red-500 text-sm mb-2'>{errormssg}</div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600/90 transition py-2.5 rounded text-white font-medium cursor-pointer"
                    >
                        Register
                    </button>

                    <p className="text-center mt-4">
                        Already have an account?
                        <Link to='/Login' className="text-blue-500 underline ml-1">Login</Link>
                    </p>
                </form>
            </div>
        </motion.div>
    );
};

export default Register;
