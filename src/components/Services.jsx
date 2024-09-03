import React from 'react';
import { FaCalendar, FaCamera, FaUser } from 'react-icons/fa';

const Services = () => {
    const services = [
        { 
            title: 'Videography', 
            description: 'Professional social media content, commercials, and more.', 
            icon: FaCamera,
            image: '/images/services/videography-image.jpg'
        },
        { 
            title: 'Portraits', 
            description: 'Professional headshots and personal portraits.', 
            icon: FaUser,
            image: '/images//portraits-image.jpg'
        },
        { 
            title: 'Events', 
            description: 'Weddings, corporate events, and special occasions.', 
            icon: FaCalendar,
            image: '/assets/images/weddings/wedding.png'
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12 text-secondary">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-neutral rounded-xl shadow-2xl overflow-hidden flex flex-col">
                            <div className="bg-gradient-to-r from-primary to-secondary p-6 flex items-center justify-center">
                                {React.createElement(service.icon, { className: "text-4xl text-background" })}
                            </div>
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
                                    <h3 className="text-xl font-semibold mb-2 text-secondary">{service.title}</h3>
                                    <p className="text-secondary">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;