import React, { useEffect, useState } from 'react';

const Slideshow = ({ photos }) => {
    const categories = [...new Set(photos.map((photo) => photo.category))];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const slideshowTimer = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) =>
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(slideshowTimer);
        };
    }, [photos]);

    return (
        <div className="flex flex-col ">
            {categories.map((category, index) => (
                <div key={category} className="lg:w-1/2 xl:w-1/3 p-4">
                    <div className="bg-gray-100 rounded-lg ">
                        <div className="flex ">
                            {photos
                                .filter((photo) => photo.category === category)
                                .map((photo, index) => (
                                    <div
                                        key={photo.id}
                                        className={`transition-opacity duration-500 ${index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                                            } l lg:w-1/2 xl:w-1/3 p-2`}
                                    >
                                        <img
                                            src={photo.src}
                                            alt={`Photo ${photo.id}`}
                                            className="rounded-md shadow-md "
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
