import React from 'react';
import LogoutBtn from './LogoutBtn';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Logo } from '../index';
import { Link } from 'react-router-dom';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true,
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ];

    return (
        <header className="py-3 shadow bg-gray-dark border-b border-pink">
            <Container>
                <nav className="flex items-center">
                 
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto space-x-4">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="inline-block font-serif font-bold text-lg px-6 py-2 text-white hover:bg-pink hover:text-black rounded-full transition duration-300"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;