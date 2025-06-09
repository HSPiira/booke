"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Bell, Phone } from 'lucide-react';
import { useTheme } from 'next-themes';

const AppBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                ${scrolled
                    ? 'bg-white/70 dark:bg-gray-900/30 backdrop-blur-md border-gray-100 dark:border-gray-800'
                    : 'bg-transparent'}
            `}
        >
            <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto w-full">
                {/* Left: Logo */}
                <div className="flex items-center gap-2 min-w-0">
                    <img src="/favicon.svg" alt="IgweHomes Logo" className="w-8 h-8 flex-shrink-0" />
                    <span className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white leading-tight truncate">Igwe Hotels</span>
                </div>

                {/* Center: Reservation (hide on xs, show on sm+) */}
                <div className="hidden md:flex items-center gap-2">
                    <Bell className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                    <span className="font-semibold text-sm text-gray-900 dark:text-white tracking-wide">RESERVATION</span>
                </div>

                {/* Right: Phone, Theme Toggler, Menu */}
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Phone (always visible, font size responsive) */}
                    <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-gray-800 dark:text-gray-200 flex-shrink-0" />
                        <span className="font-medium text-sm xs:text-base sm:text-sm md:text-sm text-gray-900 dark:text-white whitespace-nowrap">+256 (0) 782 345 678</span>
                    </div>
                    {/* Theme toggler */}
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && (
                            theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )
                        )}
                    </button>
                    {/* Menu icon always visible on mobile */}
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <X className="block h-6 w-6" />
                        ) : (
                            <Menu className="block h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu (optional, can add links here if needed) */}
            {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg z-50 p-4">
                    {/* Add mobile nav links here if needed */}
                    <div className="text-gray-700 dark:text-gray-200">Menu content...</div>
                </div>
            )}
        </nav>
    );
};

export default AppBar; 