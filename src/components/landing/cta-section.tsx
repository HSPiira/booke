import Link from "next/link";

export function CTASection() {
    return (
        <div className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-2 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                        ✨ Join Our Community
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Ready to Experience
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
                            Luxury Travel?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of satisfied travelers who have found their perfect accommodation with us. Start your journey today.
                    </p>

                    <div className="flex flex-row gap-6 justify-center items-center w-full mt-6">
                        <Link
                            href="/hotels"
                            className="group flex items-center gap-3 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-bold text-base shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:bg-blue-800 dark:focus:bg-blue-700 focus:outline-none transition-all duration-200"
                        >
                            <span>Get Started Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link
                            href="/signin"
                            className="group flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full font-bold text-base shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none transition-all duration-200"
                        >
                            <span>Sign In</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}