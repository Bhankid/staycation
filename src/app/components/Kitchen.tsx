import Image from "next/image";

interface KitchenItem {
  src: string;
  alt: string;
  title: string;
  location: string;
  popular?: boolean;
}

const kitchenItems: KitchenItem[] = [
  {
    src: "/k1.png",
    alt: "Modern kitchen with white cabinets and wooden accents",
    title: "PS Wood",
    location: "Depok, Indonesia",
  },
  {
    src: "/k2.png",
    alt: "Spacious kitchen with wooden flooring and island",
    title: "One Five",
    location: "Jakarta, Indonesia",
  },
  {
    src: "/k3.png",
    alt: "Minimalist kitchen with white cabinets and black countertops",
    title: "Minimal",
    location: "Bogor, Indonesia",
    popular: true,
  },
  {
    src: "/k4.png",
    alt: "Cozy kitchen with red accents and wooden cabinets",
    title: "Stays Home",
    location: "Wonosobo, Indonesia",
  },
];

const Kitchen = () => {
  return (
    <div className="container mx-auto p-2 mt-4">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Apartments with kitchen set
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {kitchenItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-blue-900">
                {item.title}
              </h2>
              <p className="text-gray-500">{item.location}</p>
              {item.popular && (
                <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Popular Choice
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
