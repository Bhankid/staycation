const MostPick = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Most Picked</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Blue Origin Fams, Jakarta, Indonesia"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            $50 per night
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">Blue Origin Fams</h2>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Ocean Land, Bandung, Indonesia"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            $22 per night
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">Ocean Land</h2>
            <p>Bandung, Indonesia</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Stark House, Malang, Indonesia"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            $856 per night
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">Stark House</h2>
            <p>Malang, Indonesia</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Vinna Villa, Malang, Indonesia"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            $62 per night
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">Vinna Villa</h2>
            <p>Malang, Indonesia</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Bobox, Medan, Indonesia"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-pink-500 text-white px-3 py-1 rounded-br-lg">
            $72 per night
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2 className="text-lg font-semibold">Bobox</h2>
            <p>Medan, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPick;
