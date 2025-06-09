import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const hotelData = {
    oasisoverture: {
        name: "OasisOverture",
        locations: [
            {
                city: "New York, USA",
                slug: "new-york",
                image: "/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg",
            },
            {
                city: "Los Angeles, USA",
                slug: "los-angeles",
                image: "/hotel images/Modern houses in the Scottish Highlands.jpeg",
            },
        ],
    },
    hiddenhaven: {
        name: "HiddenHaven",
        locations: [
            {
                city: "Chicago, USA",
                slug: "chicago",
                image: "/hotel images/bfaf73db-edf6-46b9-8bc9-b2cd6c7bbe32.jpeg",
            },
            {
                city: "Miami, USA",
                slug: "miami",
                image: "/hotel images/d10f8e93-f95a-4fe6-a88c-eb4678affd1e.jpeg",
            },
        ],
    },
    goldenvalley: {
        name: "GoldenValley",
        locations: [
            {
                city: "San Francisco, USA",
                slug: "san-francisco",
                image: "/hotel images/b613caa2-558f-4c9c-9abe-dcfcb8e6d64a.jpeg",
            },
            {
                city: "Zurich, Switzerland",
                slug: "zurich",
                image: "/hotel images/Contemporary House with a View.jpeg",
            },
        ],
    },
};

export default function BrandLocationsPage({ params }: { params: { brand: string } }) {
    const brand = hotelData[params.brand as keyof typeof hotelData];
    if (!brand) return notFound();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 pb-16">
            <div className="relative max-w-4xl mx-auto px-4 pt-12">
                <div className="flex items-center mb-8">
                    <a href="/hotels" className="mr-3 inline-flex items-center p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10" aria-label="Back to brands">
                        <ArrowLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                    </a>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">{brand.name} Locations</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {brand.locations.map((loc) => (
                        <div key={loc.slug} className="overflow-hidden shadow-xl border-0 bg-white dark:bg-gray-900 group transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={loc.image}
                                    alt={loc.city}
                                    fill
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <h2 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-4">{loc.city}</h2>
                                <Link
                                    href={`/hotels/${params.brand}/${loc.slug}`}
                                    className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-2 shadow-lg text-center transition-colors"
                                >
                                    View Rooms
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 