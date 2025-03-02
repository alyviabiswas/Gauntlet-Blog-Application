import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className="inline-block px-6 py-2 text-white bg-pink hover:bg-pink rounded-full transition duration-300"
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;