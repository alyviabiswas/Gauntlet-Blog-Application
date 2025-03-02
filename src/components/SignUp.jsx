import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="py-8 flex items-center justify-center bg-black ">
            <div className="w-full max-w-lg bg-gray-dark rounded-xl py-4  px-12 border border-pink shadow-lg">
                <div className="mb-6 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-sans font-bold text-pink mb-4">
                    Sign up to create account
                </h2>
                <p className="mt-2 text-center text-gray-300">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-pink hover:text-violet-400 transition-all duration-200"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="mt-6">
                    <div className="space-y-5">
                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            {...register('name', {
                                required: true,
                            })}
                            className="bg-black text-white border-pink focus:border-pink focus:ring-pink font-extralight"
                        />
                        <Input
                            label="Email:"
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Email address must be valid',
                                },
                            })}
                            className="bg-black text-white border-pink  focus:border-pink focus:ring-pink"
                        />
                        <Input
                            label="Password:"
                            type="password"
                            placeholder="Enter your password"
                            {...register('password', {
                                required: true,
                            })}
                            className="bg-black text-white border-pink focus:border-pink focus:ring-pink"
                        />
                        <Button
                            type="submit"
                            className="w-full bg-pink text-white hover:bg-pink transition duration-300"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;