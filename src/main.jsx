import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Features from './pages/features.jsx'
import Developer from './pages/Developer.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AllPosts from "./pages/AllPosts";
import Source from './pages/Source.jsx'
import Help from './pages/Help.jsx'
import { Account } from 'appwrite'
import ContactUs from './pages/ContactUs.jsx'


// Creating the router configuration
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: '/signup',
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: '/all-posts',
                element: (
                    <AuthLayout authentication>
                        <AllPosts />
                    </AuthLayout>
                ),
            },
            {
                path: '/add-post',
                element: (
                    <AuthLayout authentication>
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: '/edit-post/:slug',
                element: (
                    <AuthLayout authentication>
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: '/post/:slug',
                element: <Post />,
            },
            {
                path: '/features',
                element: <Features/>
            },
            {
                path: '/developer',
                element: <Developer/>
            },
            {
                path: '/source',
                element: <Source/>
            },
            {
                path: '/help',
                element: <Help/>
            },
            
            {
                path: '/contactus',
                element: <ContactUs/>
            },
            
            
        ],
    },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);