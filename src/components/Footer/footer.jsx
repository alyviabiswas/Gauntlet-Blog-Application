import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gray-dark border-t border-pink">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    {/* Logo and Copyright Section */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="80px" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-300">
                                    &copy; Copyright 2025. All Rights Reserved by Alyvia Biswas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-lg font-bold uppercase text-pink">
                                COMPANY
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="/features"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="/developer"
                                    >
                                        Developer
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="/source"
                                    >
                                        Source
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-lg font-bold uppercase text-pink">
                                SOCIAL MEDIA
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="https://www.github.com/alyviabiswas"
                                    >
                                        GitHub
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="https://www.linkedin.com/in/alyvia-biswas-2907a1253/"
                                    >
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink
                                         transition duration-300"
                                        to="https://www.instagram.com/alyviabiswas/"
                                    >
                                        Instagram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Support Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9 text-lg font-bold uppercase text-pink">
                                SUPPORT
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="/help"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium text-white hover:text-pink transition duration-300"
                                        to="/contactus"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;