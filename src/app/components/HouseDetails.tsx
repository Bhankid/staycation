import Image from "next/image";

function HouseDetails() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Navigation */}
      <nav className="flex items-center space-x-4 text-gray-500">
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <span>/</span>
        <a href="#" className="text-gray-900 font-semibold">
          House Details
        </a>
      </nav>

      {/* Header */}
      <header className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900">Village Angga</h1>
        <p className="text-gray-400">Bogor, Indonesia</p>
      </header>

      {/* Main Content */}
      <main className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large Image */}
        <div className="col-span-1 md:col-span-2">
          <Image
            src="/v1.png" 
            alt="Modern white house with geometric shapes and a small garden"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Small Images */}
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <Image
            src="/v2.png" 
            alt="Cozy living room with a gray sofa and colorful pillows"
            width={300}
            height={200}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/v3.png" 
            alt="Bedroom with a large bed and wooden accents"
            width={300}
            height={200}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}

export default HouseDetails;
