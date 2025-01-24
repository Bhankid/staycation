import Image from "next/image";

interface MostPickItem {
  src: string;
  alt: string;
  title: string;
  location: string;
  price: string;
}

const mostPickItems: MostPickItem[] = [
  {
    src: "/featured.png",
    alt: "Blue Origin Fams, Jakarta, Indonesia",
    title: "Blue Origin Fams",
    location: "Jakarta, Indonesia",
    price: "$50 per night",
  },
  {
    src: "/Rectangle 2.png",
    alt: "Ocean Land, Bandung, Indonesia",
    title: "Ocean Land",
    location: "Bandung, Indonesia",
    price: "$22 per night",
  },
  {
    src: "/overlay2.png",
    alt: "Stark House, Malang, Indonesia",
    title: "Stark House",
    location: "Malang, Indonesia",
    price: "$856 per night",
  },
  {
    src: "/overlay3.png",
    alt: "Vinna Villa, Malang, Indonesia",
    title: "Vinna Villa",
    location: "Malang, Indonesia",
    price: "$62 per night",
  },
  {
    src: "/overlay.png",
    alt: "Bobox, Medan, Indonesia",
    title: "Bobox",
    location: "Medan, Indonesia",
    price: "$72 per night",
  },
];

const MostPick = () => {
  return (
    <div className="p-8 mt-16">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Most Picked</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mostPickItems.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
              {item.price}
            </div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPick;
