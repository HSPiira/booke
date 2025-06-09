export function FeaturesSection() {
    return (
        <div className="py-24 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-black dark:text-gray-300 max-w-2xl mx-auto">
                        Experience the difference with our innovative features designed to make your stay perfect
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group p-8 rounded-2xl bg-card text-card-foreground hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100 dark:border-indigo-900/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Smart Booking</h3>
                        <p className="leading-relaxed">
                            Our AI-powered system finds the perfect match for your preferences and budget.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="group p-8 rounded-2xl bg-card text-card-foreground hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-emerald-100 dark:border-emerald-900/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
                        <p className="leading-relaxed">
                            We match any lower price you find, ensuring you always get the best deal.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group p-8 rounded-2xl bg-card text-card-foreground hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300">
                        <div className="w-14 h-14 bg-rose-50 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-rose-100 dark:border-rose-900/30">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Secure & Flexible</h3>
                        <p className="leading-relaxed">
                            Bank-level security and flexible cancellation policies for peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 