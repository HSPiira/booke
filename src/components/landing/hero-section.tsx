import Image from "next/image";

export function HeroSection() {
    return (
        <div className="relative min-h-screen flex items-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 relative z-10">
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium text-sm mb-4">
                            ✨ The Future of Hotel Booking
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="block text-gray-900">Discover Your</span>
                            <span className="block text-blue-600 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                                Perfect Stay
                            </span>
                        </h1>
                        <p className="text-xl text-black max-w-2xl leading-relaxed">
                            Experience luxury accommodations with our AI-powered booking platform. Find the perfect match for your travel style.
                        </p>

                        {/* Search Bar */}
                        <div className="bg-white rounded-full shadow-xl p-1.5 flex items-center max-w-xl group hover:shadow-2xl transition-all duration-300">
                            <div className="flex-1 px-4 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="w-full border-none focus:ring-0 text-md placeholder-gray-500 focus:outline-none bg-transparent"
                                />
                            </div>
                            <button className="bg-blue-600 text-white p-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-blue-600">10K+</div>
                                <div className="text-gray-600">Hotels</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">50K+</div>
                                <div className="text-gray-600">Happy Guests</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image Gallery */}
                    <div className="relative h-[600px] hidden lg:block">
                        <div className="absolute top-0 right-0 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Luxury Hotel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-6">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Hotel Room"
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