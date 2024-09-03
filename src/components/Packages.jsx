import React from 'react';

const PhotoPackages = () => {
    const packages = [
        { id: 1, title: 'Essence Collection', price: '$299', description: 'Capture your story with 20 stunning, professionally edited photos', features: ['2-hour session', 'Online gallery', '5 high-res digital downloads'] },
        { id: 2, title: 'Timeless Memories', price: '$499', description: 'Create lasting memories with 40 beautifully crafted images', features: ['4-hour session', 'Online gallery', '15 high-res digital downloads', '1 11x14 fine art print'] },
        { id: 3, title: 'Legacy Portfolio', price: '$799', description: 'The ultimate package for those who want it all', features: ['Full-day session', 'Online gallery', 'All high-res digital images', '1 16x20 canvas print', 'Custom photo album'] },
    ];

    return (
<div className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Capture Your Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
                <div key={pkg.id} className="bg-neutral rounded-xl shadow-2xl overflow-hidden flex flex-col">
                    <div className="bg-gradient-to-r from-primary to-secondary p-6">
                        <h3 className="text-2xl font-bold mb-2 text-background">{pkg.title}</h3>
                        <p className="text-3xl font-bold text-background">{pkg.price}</p>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <p className="text-secondary mb-4">{pkg.description}</p>
                            <ul className="text-secondary mb-6">
                                {pkg.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mb-2">
                                        <svg className="w-4 h-4 mr-2 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full bg-accent text-background font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300">
                            Book Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>
    );
};

export default PhotoPackages;