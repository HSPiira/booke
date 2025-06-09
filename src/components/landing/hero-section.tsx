import Image from "next/image";
import { Search, MapPin } from "lucide-react";

export function HeroSection() {
    return (
        <div className="relative min-h-screen flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 relative z-10">
                        <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
                            ✨ The Future of Hotel Booking
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="block text-gray-900 dark:text-white">Discover Your</span>
                            <span className="block text-blue-600 dark:text-blue-400 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                                Perfect Stay
                            </span>
                        </h1>
                        <p className="text-xl text-black dark:text-gray-200 max-w-2xl leading-relaxed">
                            Experience luxury accommodations with our AI-powered booking platform. Find the perfect match for your travel style.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl">
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30">
                                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" strokeWidth={2.5} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="w-full pl-14 pr-14 py-4 rounded-full border border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/30 transition-all outline-none text-base bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                                    <Search className="h-5 w-5" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Hotels</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Happy Guests</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                                <div className="text-gray-600 dark:text-gray-400">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image Gallery */}
                    <div className="relative h-[600px] hidden lg:block">
                        <div className="absolute top-0 right-0 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3">
                            <Image
                                src="/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg"
                                alt="Luxury Villa"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-6">
                            <Image
                                src="/hotel images/Contemporary House with a View.jpeg"
                                alt="Modern House"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 