import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-cream font-Cormorant-Garamond text-black py-8">
            <div className="container flex flex-col items-center justify-center mx-auto h-full">
                <h2 className="text-2xl mb-4">Joyful Perspectives</h2>
                <p className="mb-4">joyfulperspectivesphoto@gmail.com</p>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/your-instagram-account" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/your-facebook-account" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
