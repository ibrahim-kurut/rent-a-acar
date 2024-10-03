import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Slices/userSlice';
import LoaderSpinner from '../components/LoaderSpinner';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.user);


    const handleSubmit = (e) => {
        const formDatad = { email, password }
        e.preventDefault();
        // validation
        if (email.trim() === '' || password.trim() === '') {
            toast.error('Please fill in all fields');
        } else {
            // send data to server
            dispatch(login(formDatad))
                .unwrap()
                .then(() => {
                    toast.success("Login successful")
                    navigate('/')
                })
                .catch((error) => {
                    toast.error(`Login failed: ${error}`);
                });
        }

    };
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-200 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='password'
                            className="w-full text-black px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {status === 'loading' ? <LoaderSpinner /> : "Login"}
                        </button>
                    </div>
                </form>
                <p className="text-black">If you do not have an account,
                    <Link
                        className="capitalize font-bold "
                        to="/register"> register now.</Link>
                </p>
            </div>

        </div>
    );
};

export default Login;
