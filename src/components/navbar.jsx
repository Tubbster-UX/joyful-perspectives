
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
    const [menuOpacity, setMenuOpacity] = useState('opacity-0');

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setTimeout(() => setMenuOpacity('opacity-100'), 10); // Start transition after a moment
        } else {
            setMenuOpacity('opacity-0');
            setTimeout(() => setIsMenuOpen(false), 300); // Delay the unmount until after the transition
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsNavbarTransparent(!isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'Services', href: '/services' },
        { title: 'About', href: '/about' },
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'Contact', href: '/contact' },
    ];

    const currentPage = window.location.pathname; // Get the current page URL

    return (
        <nav className={`font-Cormorant-Garamond lg:py-12 py-5 px-10 fixed top-0 w-full z-20 transition duration-300 ease-in-out ${isNavbarTransparent && currentPage === '/' ? 'bg-transparent' : 'bg-cream'}`}>
            <div className="container mx-auto flex gap-5 justify-between items-center">
                <div className={`lg:text-4xl md:text-xl text-2xl font-light ${isNavbarTransparent && currentPage === '/' ? 'text-white' : 'text-black'}`}><a href='/'>JOYFUL PERSPECTIVES</a></div>
                <div className="hidden lg:flex space-x-14">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`text-2xl hover:text-gray-600 transition-all duration-300 ${isNavbarTransparent && currentPage === '/' ? 'text-white' : 'text-black'} ${currentPage === link.href ? 'underline underline-offset-8 transition-all duration-300' : ''}`}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button
                    className="lg:hidden text-2xl hover:text-gray-600 transition-all duration-300"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className={`h-6 w-6 ${isNavbarTransparent && currentPage === '/' ? 'text-white' : 'text-black'}`} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transition-opacity duration-300 ease-in-out ${menuOpacity}`}>
                    <div className="container mx-auto flex justify-center items-center h-full">
                        <button
                            className="absolute top-4 right-4 text-2xl hover:text-gray-600 transition-all duration-300"
                            onClick={toggleMenu}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                        <ul className="text-2xl text-center space-y-6">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className={`${currentPage === link.href ? 'underline' : ''}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;