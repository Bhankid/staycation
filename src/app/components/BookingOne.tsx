import Image from "next/image";

function BookingOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Staycation.
        </h1>
      </header>
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
            1
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
            2
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-gray-600">
            3
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Booking Information
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please fill up the blank fields below
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/b1.png" 
              alt="Living room with modern furniture and decor"
              width={400}
              height={300}
              className="rounded-lg shadow-md mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">Podo Wae</h3>
              <p className="text-gray-500">Madiun, Indonesia</p>
              <p className="text-gray-800 font-bold">
                $480 USD <span className="text-gray-500">per 2 nights</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value="Angga"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value="Risky"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value="bwa@cloass.com"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value="0822020202020"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Continue to Book
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingOne;
