import React from 'react';

const ServiceCard = ({ imagesrc, title, price }) => {
    console.log(imagesrc);
    return (
        <div className="max-w-sm overflow-hidden">
        <img
          className="w-full"
          src={imagesrc}
          alt="Seniors Portrait"
          style={{ height: '450px', objectFit: 'cover' }} // Adjust the height as needed
        />
        <div className="px-6 py-4 bg-white bg-opacity-80">
          <div className="font-bold text-3xl mb-2">{title}</div>
          <p className="text-gray-700 text-3xl">{price}</p>
          <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
            Book Now
          </button>
        </div>
      </div>
    );
};

export default ServiceCard;
