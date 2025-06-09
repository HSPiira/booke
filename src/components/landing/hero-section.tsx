import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row bg-white dark:bg-black">
            {/* Left: Image with overlayed text and button */}
            <div className="relative flex-1 flex items-center justify-center min-h-[400px] md:min-h-[400px] lg:min-h-[400px] w-full">
                <Image
                    src="/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg"
                    alt="Hotel Room"
                    fill
                    className="object-cover rounded-none"
                    priority
                />
                {/* Overlayed content */}
                <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center md:items-start px-4 sm:px-8 md:pl-16 z-10">
                    <div className="max-w-xl w-full text-center md:text-left">
                        <h1 className="mb-8">
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#b48a2c', fontFamily: 'serif' }}>
                                Discover Deals
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#b48a2c', fontFamily: 'serif' }}>
                                Hotel &amp;
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black" style={{ fontFamily: 'serif' }}>
                                Resorts
                            </span>
                        </h1>
                        <Link href="/hotels" className="inline-block mt-2 px-8 sm:px-10 py-3 sm:py-4 bg-black text-white text-base sm:text-lg font-semibold rounded-none shadow hover:bg-gray-900 transition-all">
                            Explore Rooms
                        </Link>
                    </div>
                </div>
            </div>
            {/* Right: Vertical Navigation */}
            <div className="w-full md:w-[300px] min-h-[200px] md:min-h-[400px] lg:min-h-[400px] flex flex-col justify-center items-center bg-white dark:bg-black border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 py-8 md:py-0">
                <nav className="space-y-6 sm:space-y-8 text-base sm:text-lg font-medium w-full text-center">
                    <a href="#" className="block text-black dark:text-white font-bold underline underline-offset-4">Home</a>
                    <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">About Us</a>
                    <a href="#rooms" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Rooms</a>
                    <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Services</a>
                    <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition">Contact</a>
                </nav>
            </div>
        </div>
    );
} 