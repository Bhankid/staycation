import Image from "next/image";

interface BackyardItem {
  src: string;
  alt: string;
  title: string;
  location: string;
  popular?: boolean;
}

const backyardItems: BackyardItem[] = [
  {
    src: "/pic.png",
    alt: "Greenhouse with plants",
    title: "Tabby Town",
    location: "Gunung Batu, Indonesia",
    popular: true,
  },
  {
    src: "/pic1.png",
    alt: "Swimming pool with clear sky",
    title: "Anggana",
    location: "Bogor, Indonesia",
  },
  {
    src: "/Rectangle 3.png",
    alt: "House with lush green lawn",
    title: "Seattle Rain",
    location: "Jakarta, Indonesia",
  },
  {
    src: "/Rectangle 4.png",
    alt: "Wooden house in forest",
    title: "Wodden Pit",
    location: "Wonosobo, Indonesia",
  },
];

const Backyard = () => {
  return (
    <div className="p-8 mt-16">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Houses with beauty backyard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {backyardItems.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              src={item.src}
              alt={item.alt}
              width={300}
              height={200}
              className="w-full h-[200px] object-cover rounded-lg transition duration-300 group-hover:scale-105"
            />
            {item.popular && (
              <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Popular Choice
              </div>
            )}
            <div className="mt-2">
              <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backyard;
