import Image from "next/image";

function Booking() {
  return (
    <div className="container mx-auto p-8 mt-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Stay</span>cation.
        </h1>
      </header>
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
            1
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
            2
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
            3
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Booking Information
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Please fill up the blank fields below
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/b1.png" 
              alt="Living room with modern furniture"
              width={400}
              height={300}
              className="rounded-lg shadow-md mb-4"
            />
            <div className="text-center">
              <h3 className="text-lg font-bold">Pada Wae</h3>
              <p className="text-gray-500">Madiun, Indonesia</p>
              <p className="text-gray-800 font-bold">
                $480 USD <span className="text-gray-500">per</span> 2 nights
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please type here .."
                  value="Anggi"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please type here .."
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please type here .."
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please type here .."
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-gray-200 text-gray-500 rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
