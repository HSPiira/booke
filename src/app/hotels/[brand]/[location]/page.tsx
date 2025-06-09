import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Wifi, Car, Coffee, ArrowLeft } from "lucide-react";

const hotelRoomsData = {
    oasisoverture: {
        "new-york": [
            {
                name: "Deluxe Suite",
                price: 650,
                oldPrice: 700,
                rating: 4.5,
                reviews: 120,
                amenities: ["wifi", "car", "coffee"],
                discount: "10% Off",
                image: "/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg",
            },
            {
                name: "City View Room",
                price: 480,
                oldPrice: null,
                rating: 4.3,
                reviews: 80,
                amenities: ["wifi", "coffee"],
                discount: "5% Off",
                image: "/hotel images/Natural light maximization and window shape variety contribute to the serenity in design of the home.jpeg",
            },
        ],
        "los-angeles": [
            {
                name: "Oceanfront Suite",
                price: 720,
                oldPrice: 800,
                rating: 4.7,
                reviews: 95,
                amenities: ["wifi", "car"],
                discount: "10% Off",
                image: "/hotel images/Modern houses in the Scottish Highlands.jpeg",
            },
            {
                name: "Garden Room",
                price: 390,
                oldPrice: null,
                rating: 4.2,
                reviews: 60,
                amenities: ["wifi", "coffee"],
                discount: null,
                image: "/hotel images/_ (1).jpeg",
            },
        ],
    },
    hiddenhaven: {
        chicago: [
            {
                name: "Executive Suite",
                price: 540,
                oldPrice: 600,
                rating: 4.6,
                reviews: 110,
                amenities: ["wifi", "car", "coffee"],
                discount: "8% Off",
                image: "/hotel images/bfaf73db-edf6-46b9-8bc9-b2cd6c7bbe32.jpeg",
            },
            {
                name: "Standard Room",
                price: 320,
                oldPrice: null,
                rating: 4.1,
                reviews: 70,
                amenities: ["wifi"],
                discount: null,
                image: "/hotel images/_ (2).jpeg",
            },
        ],
        miami: [
            {
                name: "Beachside Suite",
                price: 610,
                oldPrice: 670,
                rating: 4.8,
                reviews: 130,
                amenities: ["wifi", "coffee"],
                discount: "9% Off",
                image: "/hotel images/d10f8e93-f95a-4fe6-a88c-eb4678affd1e.jpeg",
            },
            {
                name: "Pool View Room",
                price: 410,
                oldPrice: null,
                rating: 4.3,
                reviews: 85,
                amenities: ["wifi", "car"],
                discount: null,
                image: "/hotel images/_ (3).jpeg",
            },
        ],
    },
    goldenvalley: {
        "san-francisco": [
            {
                name: "Bay Suite",
                price: 700,
                oldPrice: 750,
                rating: 4.7,
                reviews: 105,
                amenities: ["wifi", "car", "coffee"],
                discount: "7% Off",
                image: "/hotel images/b613caa2-558f-4c9c-9abe-dcfcb8e6d64a.jpeg",
            },
            {
                name: "Downtown Room",
                price: 350,
                oldPrice: null,
                rating: 4.0,
                reviews: 60,
                amenities: ["wifi"],
                discount: null,
                image: "/hotel images/_ (4).jpeg",
            },
        ],
        zurich: [
            {
                name: "Lake View Suite",
                price: 800,
                oldPrice: 900,
                rating: 4.9,
                reviews: 140,
                amenities: ["wifi", "coffee"],
                discount: "11% Off",
                image: "/hotel images/Contemporary House with a View.jpeg",
            },
            {
                name: "Classic Room",
                price: 420,
                oldPrice: null,
                rating: 4.2,
                reviews: 75,
                amenities: ["wifi", "car"],
                discount: null,
                image: "/hotel images/No DMs_ To contact me, click the link.jpeg",
            },
        ],
    },
};

const amenityIcons = {
    wifi: <Wifi className="h-4 w-4 text-gray-400" />,
    car: <Car className="h-4 w-4 text-gray-400" />,
    coffee: <Coffee className="h-4 w-4 text-gray-400" />,
};

export default function LocationRoomsPage({ params }: { params: { brand: string; location: string } }) {
    const brandRooms = hotelRoomsData[params.brand as keyof typeof hotelRoomsData] as Record<string, any[]> | undefined;
    const rooms = brandRooms ? (brandRooms[params.location] as any[] | undefined) : undefined;
    if (!rooms) return notFound();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pb-16">
            <div className="max-w-4xl mx-auto px-4 pt-12">
                <div className="flex items-center gap-3 mb-8">
                    <a href={`/hotels/${params.brand}`} className="inline-flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Back to locations">
                        <ArrowLeft className="h-6 w-6 text-gray-700" />
                    </a>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Available Rooms</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {rooms.map((room: any, i: number) => (
                        <div key={room.name} className="rounded-3xl overflow-hidden shadow-xl border-0 bg-white group transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={i < 2}
                                />
                                {room.discount && (
                                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                                        {room.discount}
                                    </span>
                                )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="font-semibold text-xl text-gray-900 truncate max-w-[70%]">{room.name}</h2>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-1 font-semibold text-gray-800">{room.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    {room.amenities.map((a: string) => (
                                        <span key={a}>{amenityIcons[a as keyof typeof amenityIcons]}</span>
                                    ))}
                                    <span className="text-xs text-gray-400">+more</span>
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                                    {room.oldPrice && (
                                        <span className="text-base text-gray-400 line-through">${room.oldPrice}</span>
                                    )}
                                    <span className="text-xs text-gray-500 ml-2">per night</span>
                                </div>
                                <span className="text-xs text-gray-500">{room.reviews} reviews</span>
                                <button className="mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 shadow-lg transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 