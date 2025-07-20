import React from 'react'

const Failure = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-4">
          <svg className="mx-auto h-12 w-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Failed</h2>
        <p className="text-gray-600 mb-8">Something went wrong with your payment. Please try again.</p>
        <div className="border-t pt-4">
          <p className="text-red-600 mb-4">Error: Transaction declined by bank</p>
        </div>
        <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Retry Payment
        </button>
      </div>
    </div>
  )
}

export default Failure