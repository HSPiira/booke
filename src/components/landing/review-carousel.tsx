export function ReviewCarousel() {
    return (
        <div className="mt-20 w-screen relative left-1/2 right-1/2 -mx-[50vw] px-0">
            <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">4.9/5 from 10,000+ reviews</span>
            </div>

            <div className="relative w-full">
                <div className="overflow-hidden w-full">
                    <div className="flex gap-6 animate-carousel w-full">
                        {/* Review Card 1 */}
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100/50 dark:bg-blue-900/30 flex items-center justify-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">John Doe</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Luxury Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"The attention to detail and personalized service exceeded all expectations. Truly a five-star experience!"</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Review Card 2 */}
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-pink-100/50 dark:bg-pink-900/30 flex items-center justify-center">
                                    <span className="text-pink-600 dark:text-pink-400 font-semibold">AS</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Alice Smith</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Business Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"The seamless booking process and exceptional customer service made my business trip a breeze. Highly recommended!"</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Review Card 3 */}
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-100/50 dark:bg-green-900/30 flex items-center justify-center">
                                    <span className="text-green-600 dark:text-green-400 font-semibold">RJ</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Robert Johnson</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Family Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"Perfect for family vacations! The variety of accommodations and family-friendly options made our stay unforgettable."</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Duplicate review cards for seamless loop */}
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100/50 dark:bg-blue-900/30 flex items-center justify-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">JD</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">John Doe</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Luxury Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"The attention to detail and personalized service exceeded all expectations. Truly a five-star experience!"</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-pink-100/50 dark:bg-pink-900/30 flex items-center justify-center">
                                    <span className="text-pink-600 dark:text-pink-400 font-semibold">AS</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Alice Smith</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Business Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"The seamless booking process and exceptional customer service made my business trip a breeze. Highly recommended!"</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[320px] p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-transparent dark:bg-gray-900">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-green-100/50 dark:bg-green-900/30 flex items-center justify-center">
                                    <span className="text-green-600 dark:text-green-400 font-semibold">RJ</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Robert Johnson</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Family Traveler</p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">"Perfect for family vacations! The variety of accommodations and family-friendly options made our stay unforgettable."</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Navigation */}
                <div className="flex justify-center gap-2 mt-8">
                    <button className="w-2 h-2 rounded-full bg-blue-600/50"></button>
                    <button className="w-2 h-2 rounded-full bg-gray-300/50 dark:bg-gray-700/50"></button>
                    <button className="w-2 h-2 rounded-full bg-gray-300/50 dark:bg-gray-700/50"></button>
                </div>
            </div>
        </div>
    );
} 