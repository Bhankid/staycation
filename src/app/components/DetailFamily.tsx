import Image from "next/image";

function DetailFamily() {
  return (
    <div className="container mx-auto mt-16 bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="relative">
        <Image
          src="/f1.png" 
          alt="A family standing together on the beach, facing the ocean"
          width={300}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/family-image-overlay.png" 
          alt="A family standing together on the beach, facing the ocean"
          width={300}
          height={400}
          className="absolute top-4 left-4 w-full h-full rounded-lg shadow-lg opacity-50"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold text-gray-800">Happy Family</h2>
        <div className="flex justify-center md:justify-start items-center my-2">
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
          <i className="fas fa-star text-yellow-500"></i>
        </div>
        <p className="text-gray-600 mb-4">
          As a wife I can pick a great trip with my own lovely family ... thank
          you!
        </p>
        <p className="text-gray-500 mb-4">Anggi, Product Designer</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Read Their Story
        </button>
      </div>
    </div>
  );
}

export default DetailFamily;
