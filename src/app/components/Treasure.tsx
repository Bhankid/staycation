import Image from "next/image";

interface TreasureItem {
  src: string;
  alt: string;
  title: string;
  category: string;
  popular?: boolean;
}

const treasureItems: TreasureItem[] = [
  {
    src: "/t1.png", 
    alt: "A serene lake surrounded by mountains with a wooden boat in the foreground",
    title: "Green Lake",
    category: "Nature",
  },
  {
    src: "/t2.png",
    alt: "A dog jumping into a pool",
    title: "Dog Clubs",
    category: "Pool",
  },
  {
    src: "/t3.png", 
    alt: "A storefront with a sign that reads 'Labour and Wait'",
    title: "Labour and Wait",
    category: "Shopping",
    popular: true,
  },
  {
    src: "/t4.png", 
    alt: "A beach with palm trees and a thatched umbrella",
    title: "Snorkeling",
    category: "Beach",
  },
];

const Treasure = () => {
  return (
    <div className="container mx-auto p-8 mt-16">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Treasure to Choose
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {treasureItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className="relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              {item.popular && (
                <div className="absolute top-0 left-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  Popular Choice
                </div>
              )}
            </div>
            <h2 className="text-lg font-bold text-blue-900">{item.title}</h2>
            <p className="text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treasure;
