const Backyard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Houses with beauty backyard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="relative">
          <img
            src="https://placehold.co/300x200"
            alt="Greenhouse with plants"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Popular Choice
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-bold text-gray-800">Tabby Town</h2>
            <p className="text-sm text-gray-500">Gunung Batu, Indonesia</p>
          </div>
        </div>
        <div>
          <img
            src="https://placehold.co/300x200"
            alt="Swimming pool with clear sky"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2">
            <h2 className="text-lg font-bold text-gray-800">Anggana</h2>
            <p className="text-sm text-gray-500">Bogor, Indonesia</p>
          </div>
        </div>
        <div>
          <img
            src="https://placehold.co/300x200"
            alt="House with lush green lawn"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2">
            <h2 className="text-lg font-bold text-gray-800">Seattle Rain</h2>
            <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
          </div>
        </div>
        <div>
          <img
            src="https://placehold.co/300x200"
            alt="Wooden house in forest"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-2">
            <h2 className="text-lg font-bold text-gray-800">Wodden Pit</h2>
            <p className="text-sm text-gray-500">Wonosobo, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backyard;
