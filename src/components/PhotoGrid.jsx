import React from 'react';

const PhotoGrid = ({ photos }) => {
    return (
        <div className="columns-3xs">
            {photos.map((photo) => (
                <img
                    key={photo.id}
                    src={photo.src}
                    alt={`Photo ${photo.id}`}
                    className="w-full h-full rounded shadow-sm "
                />
            ))}
        </div>
    );
};

export default PhotoGrid;
