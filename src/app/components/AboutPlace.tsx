function AboutPlace() {
  return (
    <div className="container mx-auto p-8 mt-16">
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">About the place</h2>
          <p className="text-gray-600 mb-4">
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </p>
          <p className="text-gray-600 mb-4">
            Such trends saw the demise of the soul-infused techno that typified
            the original Detroit sound. Robert Hood has noted that he and Daniel
            Bell both realized something was missing from techno in the
            post-rave era.
          </p>
          <p className="text-gray-600 mb-4">
            Design is a plan or specification for the construction of an object
            or system or for the implementation of an activity or process, or
            the result of that plan or specification in the form of a prototype,
            product or process. The national agency for design: enabling
            Singapore to use design for economic growth and to make lives
            better.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="flex flex-col items-center">
              <i className="fas fa-bed text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">5 bedroom</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-couch text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">1 living room</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-bath text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">3 bathroom</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-utensils text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">1 dining room</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-wifi text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">10 mbp/s</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-washer text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">7 unit ready</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-ice-cream text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">2 refrigator</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-tv text-2xl text-red-500 mb-2"></i>
              <span className="text-gray-700">4 television</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-12 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Start Booking</h3>
          <div className="text-3xl font-bold text-green-500 mb-2">
            $280 <span className="text-lg text-gray-400">per night</span>
          </div>
          <div className="text-gray-600 mb-4">How long you will stay?</div>
          <div className="flex items-center mb-4">
            <button className="bg-red-500 text-white px-3 py-1 rounded-l">
              -
            </button>
            <div className="px-4 py-2 border-t border-b">2 nights</div>
            <button className="bg-green-500 text-white px-3 py-1 rounded-r">
              +
            </button>
          </div>
          <div className="text-gray-600 mb-4">Pick a Date</div>
          <div className="flex items-center mb-4">
            <i className="fas fa-calendar-alt text-blue-500 text-2xl mr-2"></i>
            <div className="px-4 py-2 border rounded">20 Jan - 22 Jan</div>
          </div>
          <div className="text-gray-600 mb-4">
            You will pay <span className="font-bold">$480 USD</span> per{" "}
            <span className="font-bold">2 nights</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Continue to Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPlace;
