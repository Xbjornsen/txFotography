import React from 'react';

// Function to dynamically import images from a folder
const importAll = (r) => {
    return r.keys().map(r);
};

// Import images from the contact folder
const contactImages = importAll(require.context('../assets/images/nature', false, /\.(png|jpe?g|svg)$/));

// Use the first image in the contact folder as the background
const backgroundImage = contactImages[2];

const Contact = () => {
    return (
<section
    className="bg-cover bg-center min-h-screen rounded-lg"
    style={{ backgroundImage: `url(${backgroundImage})` }}
>
    <div className="bg-secondary bg-opacity-20 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold text-center mb-8 text-background">Contact Me</h2>
            <form className="max-w-lg mx-auto bg-background p-8 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                placeholder="Your message"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                        <button
                    className="bg-primary hover:bg-opacity-90 text-background font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                    type="button"
                >
                    Send Message
                </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;