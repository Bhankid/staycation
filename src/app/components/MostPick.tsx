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
    src: "/k1.png",
    alt: "Ocean Land, Bandung, Indonesia",
    title: "Ocean Land",
    location: "Bandung, Indonesia",
    price: "$22 per night",
  },
  {
    src: "/k2.png",
    alt: "Stark House, Malang, Indonesia",
    title: "Stark House",
    location: "Malang, Indonesia",
    price: "$856 per night",
  },
  {
    src: "/k3.png",
    alt: "Vinna Villa, Malang, Indonesia",
    title: "Vinna Villa",
    location: "Malang, Indonesia",
    price: "$62 per night",
  },
  {
    src: "/k4.png",
    alt: "Bobox, Medan, Indonesia",
    title: "Bobox",
    location: "Medan, Indonesia",
    price: "$72 per night",
  },
];

const MostPick = () => {
  return (
    <div className="p-8 mt-24 md:mt-16">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Most Picked</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* First Image - Takes 1 column on desktop, full width on mobile */}
        <div className="lg:col-span-2 relative group">
          <Image
            src={mostPickItems[0].src}
            alt={mostPickItems[0].alt}
            width={400}
            height={400}
            className="w-full h-[300px] lg:h-[460px] object-cover rounded-lg transition duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            {mostPickItems[0].price}
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">{mostPickItems[0].title}</h2>
            <p>{mostPickItems[0].location}</p>
          </div>
        </div>

        {/* Remaining 4 Images - Grid of 2x2 */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          {mostPickItems.slice(1).map((item, index) => (
            <div key={index} className="relative group">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={200}
                className="w-full h-[150px] lg:h-[215px] object-cover rounded-lg transition duration-300 group-hover:scale-105"
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
    </div>
  );
};

export default MostPick;