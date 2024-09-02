import React from 'react';

const PhotoPackages = () => {
    // Sample data for photo packages
    const packages = [
        { id: 1, title: 'Standard Package', price: '$99', description: 'Includes 10 edited photos' },
        { id: 2, title: 'Premium Package', price: '$199', description: 'Includes 20 edited photos' },
        { id: 3, title: 'Deluxe Package', price: '$299', description: 'Includes 30 edited photos' },
        // Add more packages as needed
    ];

    return (
        <div className="fixed right-0 h-auto w-1/4 bg-gray-200">
            <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Photo Packages</h2>
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
                        <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                        <p className="text-gray-600 mb-2">{pkg.price}</p>
                        <p className="text-gray-700">{pkg.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoPackages;
