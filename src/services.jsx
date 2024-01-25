import React from 'react';
import Header from './components/header';
import ServiceCard from './components/service-card';

function Services() {
    return (
        <div className='bg-cream font-Cormorant-Garamond'>
            <Header imageSrc="ruby-nation.webp" title1="Services"  />
            <div className="flex md:flex-row container mx-auto flex-col gap-10 mt-10 justify-center">
                <ServiceCard imagesrc="cameron.webp" title="Seniors" price="$100" />
                <ServiceCard imagesrc="haley-robert.webp" title="Couples" price="$75" />
            </div>
        </div>
    );
}

export default Services;
