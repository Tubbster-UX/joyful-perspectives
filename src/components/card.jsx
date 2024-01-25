import React from 'react';

const Card = ({ imageSrc, title, description, buttonText }) => {
    return (
<div className="max-w-sm mx-auto overflow-hidden">
    <div className="relative">
        <img className="w-full h-60 object-cover" src={imageSrc} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h2 className="text-white text-center text-xl font-bold mb-2 ">{title}</h2>
        </div>
    </div>
    <div className="px-6 py-4 bg-white/65">
        <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
            {buttonText}
        </button>
    </div>
</div>

    );
};

export default Card;
