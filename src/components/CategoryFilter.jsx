import React, { useState } from 'react';

const CategoryFilter = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        console.log(category)
    };

    return (
        <div className="flex justify-center mb-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 mx-2 font-medium text-gray-600 transition-colors duration-300 ease-in-out rounded ${selectedCategory === category
                            ? 'bg-gray-200 text-gray-800'
                            : 'bg-gray-100 hover:bg-gray-400'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
