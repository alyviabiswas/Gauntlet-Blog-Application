import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));
                    toast.success("Login successful!", {
                        style: {
                            background: "#000",
                            color: "#fff",
                        }
                    })
                } else {
                    dispatch(logout());
                    toast.error("Logout successful!", {
                        style: {
                            background: "#000",
                            color: "#fff",
                        }
                    })
                }
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-black">
            <div className="w-full block">
                <Header />
            
            <main>
                <Outlet />
            </main>
            
                <Footer />
            </div>
            <Toaster/>
        </div>
    ) : null;
}

export default App;