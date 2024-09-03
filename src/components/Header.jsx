import React, { useState } from 'react';
import { FaBars, FaCamera, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="bg-secondary text-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="md:hidden">
                                <button
                                    onClick={handleMenuToggle}
                                    className="text-background hover:text-accent inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                                >
                                    {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                                </button>
                            </div>
                            <div id="menuItems" className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
                                <Link
                                    to="/"
                                    className="text-background hover:text-accent px-3 py-2 rounded-md font-medium flex items-center"
                                >
                                    <FaCamera className="mr-2" />
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className="text-background hover:text-accent px-3 py-2 rounded-md font-medium"
                                >
                                    About
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-background hover:text-accent px-3 py-2 rounded-md font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link
                                to="/"
                                className="text-2xl font-bold text-background hover:text-accent"
                            >
                                Tx Photography
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;