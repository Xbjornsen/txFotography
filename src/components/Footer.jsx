import React from 'react';
import { FaInstagram, FaMailBulk, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className="bg-secondary text-background py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Tx Photography</h2>
                        <p className="text-gray-400">Capturing moments from today, creating memories for a lifetime.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-background hover:text-accent">
                            <FaTwitter size={24} />
                        </a>
                        <a href="mailto:txfotography@gmail.com" className="text-background hover:text-accent">
                            <FaMailBulk size={24} />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-background hover:text-accent">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Tx Photography. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
