import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {

  const[method,setMethod]=useState('cod');
  const navigate=useNavigate();

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14  min-h-[80vh] border-t px-14'>
      {/*left */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
         <h1>DELIVERY INFORMATION</h1>


        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='first name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='last name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
      <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='PhoneNumber'/>
      </div>
      {/*right */}
      <div className='mt-8 '>
        <div className='mt-8 min-w-80'>
          <h1>CARD TOTALS</h1>
          <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>$200.00</p>
            </div>
            <hr className='border border-gray-200'/>
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>$30.00</p>
            </div>
            <hr className='border border-gray-200'/>
            <div className='flex justify-between'>
                <p>Total</p>
                <p>$230.00</p>
            </div>

        </div>
        </div>
        <div className='mt-12 '>
          <h1>PAYEMENT METHOD</h1>
          {/* */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer ' onClick={()=>setMethod('stripe')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method=='stripe'?'bg-green-400':''}`}></p> 
                <img className='h-5 mx-4' alt='stripe' src='/razor.png' />
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer ' onClick={()=>setMethod('razor')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method=='razor'?'bg-green-400':''}`}></p>
                <img className='h-5 mx-4' alt='stripe' src='Paytm-logo.png'/>
            </div>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer ' onClick={()=>setMethod('cod')}>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method=='cod'?'bg-green-400':''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PlaceOrder