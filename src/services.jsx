import React from 'react';
import Header from './components/header';
import DualServiceCard from './components/dual-service-card';
import SingleServiceCard from './components/single-service-card';

function Services() {
    return (
        <div className='bg-cream font-Cormorant-Garamond'>
            <Header imageSrc="ruby-nation.webp" title1="Services" />
            <div className='flex flex-col lg:flex-row gap-4 justify-center p-16 items-center'>
                <SingleServiceCard />
                <DualServiceCard />
            </div>
        </div>
    );
}

export default Services;
