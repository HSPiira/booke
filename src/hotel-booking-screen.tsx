import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Users, Star, Heart, Filter, ArrowLeft, Wifi, Car, Coffee } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 lg:p-8 bg-white border-b">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">Hotels</h1>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      {/* Search Section */}
      <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
          <div className="relative md:col-span-2">
            <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Where are you going?" className="pl-10 bg-white text-black border-0" />
          </div>

          <div className="grid grid-cols-2 gap-2 md:col-span-2">
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Check-in"
                className="pl-10 bg-white text-black border-0 text-sm"
                defaultValue="Dec 20"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Check-out"
                className="pl-10 bg-white text-black border-0 text-sm"
                defaultValue="Dec 25"
              />
            </div>
          </div>

          <div className="relative md:col-span-2">
            <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Guests"
              className="pl-10 bg-white text-black border-0"
              defaultValue="2 Adults, 1 Child"
            />
          </div>

          <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold md:col-span-2">
            <Search className="h-4 w-4 mr-2" />
            Search Hotels
          </Button>
        </div>
      </div>

      {/* Results Header */}
      <div className="p-4 md:p-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg md:text-xl">Hotels in Paris</h2>
          <p className="text-sm md:text-base text-gray-500">245 hotels found</p>
        </div>
        <Button variant="outline" size="sm">
          Map View
        </Button>
      </div>

      {/* Hotel Cards */}
      <div className="px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Hotel Card 1 */}
        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/hotel images/58 Sleek Modern Villa Designs to Inspire Your Next….jpeg"
              alt="Hotel Luxe Paris"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
            <Badge className="absolute bottom-2 left-2 bg-green-500">Free Cancellation</Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">Hotel Luxe Paris</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  Champs-Élysées, Paris
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">4.8</span>
                </div>
                <p className="text-xs text-gray-500">(324 reviews)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Wifi className="h-4 w-4 text-gray-400" />
              <Car className="h-4 w-4 text-gray-400" />
              <Coffee className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">+8 more</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">$189</p>
                <p className="text-xs text-gray-500">per night</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hotel Card 2 */}
        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/hotel images/Contemporary House with a View.jpeg"
              alt="Grand Hotel Seine"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white h-8 w-8">
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            </Button>
            <Badge className="absolute bottom-2 left-2 bg-orange-500">Limited Deal</Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">Grand Hotel Seine</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  Louvre, Paris
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">4.6</span>
                </div>
                <p className="text-xs text-gray-500">(198 reviews)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Wifi className="h-4 w-4 text-gray-400" />
              <Car className="h-4 w-4 text-gray-400" />
              <Coffee className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">+5 more</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-blue-600">$156</p>
                  <p className="text-sm text-gray-400 line-through">$195</p>
                </div>
                <p className="text-xs text-gray-500">per night</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hotel Card 3 */}
        <Card className="overflow-hidden">
          <div className="relative">
            <Image
              src="/hotel images/Modern houses in the Scottish Highlands.jpeg"
              alt="Boutique Montmartre"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">Boutique Montmartre</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  Montmartre, Paris
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">4.4</span>
                </div>
                <p className="text-xs text-gray-500">(89 reviews)</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Wifi className="h-4 w-4 text-gray-400" />
              <Coffee className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-500">+3 more</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">$124</p>
                <p className="text-xs text-gray-500">per night</p>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Padding */}
      <div className="h-20"></div>
    </div>
  )
}
