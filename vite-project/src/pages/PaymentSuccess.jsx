import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="border-t pt-16 px-4 sm:px-8 max-w-3xl mx-auto">

      {/* ✅ Payment Success Section */}
      <div className="bg-green-100 border border-green-400 text-green-800 px-6 py-4 rounded-md mb-8 shadow-sm">
        <h2 className="text-lg font-semibold">Payment Successful!</h2>
        <p className="text-sm mt-1">Transaction ID: <span className="font-mono">TXN202507191030</span></p>
        <p className="text-sm">Date: 19 July 2025, 10:30 AM</p>
        <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition">
          Track Order
        </button>
      </div>

      {/* ✅ Orders Title */}
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {/* ✅ Static Recent Order */}
      <div className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-4 text-sm">
          <img src="/shoe.jpeg" alt="Product" className="w-16 sm:w-20 rounded" />
          <div>
            <p className="text-base font-medium">Men's Premium Jacket</p>
            <div className="flex gap-3 mt-2 text-sm text-gray-600">
              <p>$230</p>
              <p>Qty: 1</p>
              <p>Size: M</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">Ordered on: 19 July 2025</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="text-sm">Placed</p>
          </div>
          <button className="border border-gray-400 px-4 py-1 rounded text-sm hover:bg-gray-100">
            Track Order
          </button>
        </div>
      </div>
      <div className="py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-4 text-sm">
          <img src="/shoe2.jpeg" alt="Product" className="w-16 sm:w-20 rounded" />
          <div>
            <p className="text-base font-medium">Men's Premium Jacket</p>
            <div className="flex gap-3 mt-2 text-sm text-gray-600">
              <p>$200</p>
              <p>Qty: 1</p>
              <p>Size: M</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">Ordered on: 10 June 2025</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-red-600">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <p className="text-sm">failed</p>
          </div>
          <button className="border border-gray-400 px-4 py-1 rounded text-sm hover:bg-gray-100" onClick={() => navigate('/fail')}>
            Details
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default PaymentSuccess;
