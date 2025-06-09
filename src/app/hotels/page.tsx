import Image from "next/image";
import Link from "next/link";
import React from "react";

const brands = [
    {
        name: "OasisOverture",
        slug: "oasisoverture",
        image: "/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg",
    },
    {
        name: "HiddenHaven",
        slug: "hiddenhaven",
        image: "/hotel images/bfaf73db-edf6-46b9-8bc9-b2cd6c7bbe32.jpeg",
    },
    {
        name: "GoldenValley",
        slug: "goldenvalley",
        image: "/hotel images/b613caa2-558f-4c9c-9abe-dcfcb8e6d64a.jpeg",
    },
];

export default function HotelsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pb-16">
            <div className="max-w-5xl mx-auto px-4 pt-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Hotel Brands</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {brands.map((brand) => (
                        <div key={brand.slug} className="overflow-hidden shadow-xl border-0 bg-white group transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col">
                            <div className="relative h-56 w-full">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    fill
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <h2 className="font-semibold text-2xl text-gray-900 mb-4">{brand.name}</h2>
                                <Link
                                    href={`/hotels/${brand.slug}`}
                                    className="inline-block rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 shadow-lg text-center transition-colors"
                                >
                                    View Locations
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 