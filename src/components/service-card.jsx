import React from 'react';

const ServiceCard = ({ imagesrc, title, price }) => {

    return (
<div class="max-w-sm mx-auto">
    <div class="shadow-lg rounded overflow-hidden">
        <img src={imagesrc} alt={title} class="w-full h-60 aspect-video object-cover" />
        <div class="bg-white p-8">
            <h2 class="font-light text-4xl italic">
                {title}
            </h2>
            <p className='font-light text-2xl italic'>{price}</p>
            <button className="mt-4 py-2 px-8 border-2 w-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-black font-medium text-lg hover:bg-black hover:text-white">
                Book Now
            </button>
        </div>
    </div>
</div>
    );
};

export default ServiceCard;