import React from 'react';

const PaymentFailed = () => {
  return (
    <div className="border-t pt-16 px-4 sm:px-8 max-w-3xl mx-auto">

      {/* ❌ Payment Failed Section */}
      <div className="bg-red-100 border border-red-400 text-red-800 px-6 py-4 rounded-md mb-8 shadow-sm">
        <h2 className="text-lg font-semibold">Payment Failed</h2>
        <p className="text-sm mt-1">Transaction ID: <span className="font-mono">TXN202507191030</span></p>
        <p className="text-sm">Date: 19 July 2025, 10:30 AM</p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition">
          Retry Payment
        </button>
      </div>

      {/* ❌ Orders Title */}
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* ❌ Failed Order (Static) */}
      <div className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-4 text-sm">
          <img src="/shoe.jpeg" alt="Product" className="w-16 sm:w-20 rounded" />
          <div>
            <p className="text-base font-medium">Men's Premium Jacket</p>
            <div className="flex gap-3 mt-2 text-sm text-gray-600">
              <p>₹1999</p>
              <p>Qty: 1</p>
              <p>Size: M</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">Attempted on: 19 July 2025</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-red-600">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <p className="text-sm">Payment failed</p>
          </div>
          <button className="border border-red-400 px-4 py-1 rounded text-sm hover:bg-red-100 text-red-700">
            Retry Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
