import React from 'react';
import AboutSection from './components/aboutme-sections';
import PhotoSection from './components/aboutme-photo';
import WhyIDoWhatIDo from './components/WhyIDoWhatIDo';

function About() {
    return (
        <div className='bg-cream font-Cormorant-Garamond'>
                <AboutSection />
                <PhotoSection />
                <WhyIDoWhatIDo />
        </div>
    );
}

export default About;
