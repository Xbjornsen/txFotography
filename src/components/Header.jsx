import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsOpen(true);
    };

    const handleMenuClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header>
                <nav className="bg-slate-800 border-b border-slate-700 shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center  h-16">
                            <div className="flex items-center ">
                                <div class="md:hidden">
                                    <button
                                        onClick={handleMenuOpen}
                                        className="text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                                    >
                                        <FaBars className="h-6 w-6" />
                                    </button>
                                </div>
                                <div id="menuItems" class="hidden md:flex md:items-center">
                                <Link
                                            to="/about"
                                            className="text-gray-100 hover:text-gray-700 px-3 py-2 rounded-md font-medium"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="text-gray-100 hover:text-gray-700 px-3 py-2 rounded-md font-medium"
                                        >
                                            Contact
                                        </Link>
                                </div>
                            </div>
                            <div>
                                <Link
                                    to="/"
                                    className="ml-4 text-2xl font-bold text-white hover:text-gray-500"
                                >
                                    Tx Photography
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;