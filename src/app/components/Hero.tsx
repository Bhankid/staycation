import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 mt-16">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Forget Busy Work,
          <br />
          Start Next Vacation
        </h1>
        <p className="text-gray-500 mb-6">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Show Me Now
        </button>
        <div className="flex justify-center md:justify-start mt-8 space-x-8">
          <div className="text-center">
            <i className="fas fa-suitcase-rolling text-pink-500 text-2xl mb-2"></i>
            <p className="text-gray-900 font-bold">80,409</p>
            <p className="text-gray-500">travelers</p>
          </div>
          <div className="text-center">
            <i className="fas fa-camera text-pink-500 text-2xl mb-2"></i>
            <p className="text-gray-900 font-bold">862</p>
            <p className="text-gray-500">treasure</p>
          </div>
          <div className="text-center">
            <i className="fas fa-city text-pink-500 text-2xl mb-2"></i>
            <p className="text-gray-900 font-bold">1,492</p>
            <p className="text-gray-500">cities</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            src="/hero.png"
            alt="A modern house with a blue sky background"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 w-full h-full border-4 border-white rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
