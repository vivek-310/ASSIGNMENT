import React from 'react'

const Success = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-8">Your order has been confirmed and will be shipped soon.</p>
        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Order Details</h3>
          <p className="text-gray-600">Order ID: #123456</p>
          <p className="text-gray-600">Amount Paid: ₹2,999</p>
        </div>
        <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default Success