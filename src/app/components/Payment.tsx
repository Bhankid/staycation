import Image from "next/image";

function Payment() {
  return (
    <div className="container mx-auto p-8 mt-16">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600">Staycation.</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-8">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-check"></i>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
              2
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
              3
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
          <p className="text-gray-500">Kindly follow the instructions below</p>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <p className="text-gray-700 mb-2">Transfer Pembayaran:</p>
            <p className="text-gray-700">Tax: 10%</p>
            <p className="text-gray-700">Sub total: $480 USD</p>
            <p className="text-gray-700 mb-4">Total: $580 USD</p>
            <div className="mb-4">
              <Image
                src="/bca-logo.png" 
                alt="BCA Logo"
                width={100}
                height={50}
                className="mb-2"
              />
              <p className="text-gray-700">Bank Central Asia</p>
              <p className="text-gray-700">2208 1996</p>
              <p className="text-gray-700">BuildWith Angga</p>
            </div>
            <div>
              <Image
                src="/mandiri-logo.png"
                alt="Mandiri Logo"
                width={100}
                height={50}
                className="mb-2"
              />
              <p className="text-gray-700">Bank Mandiri</p>
              <p className="text-gray-700">2208 1996</p>
              <p className="text-gray-700">BuildWith Angga</p>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Upload Bukti Transfer
              </label>
              <input
                type="file"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Asal Bank</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Please type here..."
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nama Pengirim</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Please type here..."
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-gray-200 text-gray-500 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
