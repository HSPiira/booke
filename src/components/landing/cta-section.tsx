"use client";
import Image from "next/image";
import Link from "next/link";

export function CTASection() {
    return (
        <div className="relative py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    <div className="relative w-80 h-60 flex-shrink-0 flex items-center justify-center">
                        <div className="absolute mt-20 left-0 w-72 h-56 overflow-hidden bg-yellow-400 shadow-lg z-0" />
                        <div className="relative left-8 w-72 h-56 overflow-hidden shadow-xl z-10">
                            <Image
                                src="/hotel images/couch-pillows-yellow.jpeg"
                                alt="Front image"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Center: Main CTA */}
                    <div className="w-full md:w-1/3 flex flex-col items-start justify-center text-left px-2">
                        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 leading-snug">
                            Stay Longer, Save More
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-md">
                            Visit Scottsdale for as long as you wish, the longer you stay, the more you save!
                        </p>
                        <Link
                            href="/book"
                            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-bold text-lg shadow-lg flex items-center gap-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                            Book Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right: Icon and secondary text */}
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center text-center md:text-left px-2">
                        <div className="mb-4 flex items-center justify-center md:justify-start">
                            {/* Simple icon similar to image */}
                            <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-800 dark:text-gray-200">
                                <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2" />
                                <rect x="24" y="4" width="24" height="16" rx="2" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-base md:text-md max-w-xs">
                            Savor something tasty at The Canal Club restaurant, bar, or poolside. Or choose to relax in your room with In-Room Dining.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}