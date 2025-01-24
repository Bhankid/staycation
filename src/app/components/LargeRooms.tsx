const hotels = [
  {
    name: "Green Park",
    location: "Tangerang, Indonesia",
    image: "https://placehold.co/300x200",
    alt: "Living room of Green Park hotel with modern furniture and large windows",
  },
  {
    name: "Podo Wae",
    location: "Madiun, Indonesia",
    image: "https://placehold.co/300x200",
    alt: "Living room of Podo Wae hotel with blue furniture and staircase",
  },
  {
    name: "Silver Rain",
    location: "Bandung, Indonesia",
    image: "https://placehold.co/300x200",
    alt: "Living room of Silver Rain hotel with modern art and furniture",
  },
  {
    name: "Cashville",
    location: "Kemang, Indonesia",
    image: "https://placehold.co/300x200",
    alt: "Living room of Cashville hotel with grey furniture and dining area",
    popular: true,
  },
];

function LargeRooms() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Hotels with large living room
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.alt}
              className="w-full h-48 object-cover"
            />
            {hotel.popular && (
              <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                Popular Choice
              </div>
            )}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{hotel.name}</h2>
              <p className="text-sm text-gray-500">{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LargeRooms;
