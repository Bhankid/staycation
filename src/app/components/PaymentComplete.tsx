import Image from "next/image";

function PaymentComplete() {
  return (
    <div className="container mx-auto p-8 mt-16 text-center">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">Staycation.</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <i className="fas fa-check-circle text-green-500 text-3xl"></i>
        <i className="fas fa-check-circle text-green-500 text-3xl"></i>
        <i className="fas fa-check-circle text-green-500 text-3xl"></i>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Yay! Completed</h2>
      <div className="flex justify-center mb-4">
        <Image
          src="/completed-transaction.png" 
          alt="Illustration of a completed transaction"
          width={200}
          height={150}
          className="w-48 h-48"
        />
      </div>
      <p className="text-gray-500 mb-8">
        We will inform you via email later once the transaction has been
        accepted
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700">
        Back to Home
      </button>
    </div>
  );
}

export default PaymentComplete;
