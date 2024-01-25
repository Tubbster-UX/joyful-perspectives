import React from 'react';

const PortfolioCard = ({ imageSrc, title }) => {
    return (
        <div className="flex justify-center">
        <div className="relative group w-1/1">
        <img
          className="w-full h-auto object-cover group-hover:opacity-75 transition duration-300 ease-in-out"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="bg-black/55 text-white text-4xl text-center py-4">
            {title}
          </div>
        </div>
      </div>
      </div>
    );
};

export default PortfolioCard;
