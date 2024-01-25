import React from 'react';

const PhotoGrid = () => {
    return (
        <div className="grid grid-cols-2 h-96 gap-4">
            <div className="aspect-video bg-gray-300 col-span-2 row-span-2"></div> {/* Rectangle Image */}
            <div className="aspect-square min-h-full bg-gray-300 row-span-2"></div> {/* Square Image */}
            <div className="aspect-video bg-gray-300 col-span-2 row-span-2"></div> {/* Rectangle Image */}
            <div className="aspect-square min-h-full bg-gray-300 row-span-2"></div> {/* Square Image */}
        </div>
    );
};

export default PhotoGrid;
