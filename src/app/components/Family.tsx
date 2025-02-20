import Image from "next/image";

function Family() {
  return (
    <div className="container mx-auto p-4 mt-8">
      <div className="flex flex-col md:flex-row items-center bg-white p-6">
        <div className="relative">
          <div className="absolute top-4 left-4 w-64 h-80 bg-gray-200 rounded-lg"></div>
          <Image
            src="/fam.png"
            alt="A happy family posing in front of the Eiffel Tower"
            width={300} 
            height={400} 
            className="relative w-64 h-80 rounded-lg object-cover"
          />
        </div>

        {/* Content Section - Placed to the Right */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-800">Happy Family</h2>
          <div className="flex justify-center md:justify-start mt-2">
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
          <p className="mt-4 text-gray-600">
            What a great trip with my family and I should try again next time
            soon ...
          </p>
          <p className="mt-2 text-gray-400">Angga, Product Designer</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Read Their Story
          </button>
        </div>
      </div>
    </div>
  );
}

export default Family;
