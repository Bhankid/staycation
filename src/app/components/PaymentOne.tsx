import Image from "next/image";

function PaymentOne() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Staycation.
        </h1>
      </header>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <div className="flex justify-center mb-6">
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
        <h2 className="text-2xl font-bold text-center mb-2">Payment</h2>
        <p className="text-center text-gray-500 mb-8">
          Kindly follow the instructions below
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="mb-2">Transfer Pembayaran:</p>
            <p className="mb-2">Tax: 10%</p>
            <p className="mb-2">Sub total: $480 USD</p>
            <p className="mb-2">Total: $580 USD</p>
            <div className="flex items-center mb-4">
              <Image
                src="/bca-logo.png" 
                alt="BCA logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <div>
                <p>Bank Central Asia</p>
                <p>2208 1996</p>
                <p>BuildWith Angga</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/mandiri-logo.png" 
                alt="Mandiri logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <div>
                <p>Bank Mandiri</p>
                <p>2208 1996</p>
                <p>BuildWith Angga</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Upload Bukti Transfer
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="buktibayar.png"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Asal Bank</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="Maybank"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nama Pengirim</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value="Angga Risky"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg mr-4">
            Continue to Book
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentOne;
