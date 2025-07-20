import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

const Product = () => {
    const productdata = {
        _id: 'prod_001',
        name: 'Ultimate Running Sneakers',
        price: 3499,
        description:
        'These high-performance sneakers are designed for speed, comfort, and durability. Ideal for both casual and professional runners.',
        sizes: ['6', '7', '8', '9', '10', '11'],
        image: ['/shoe.jpeg', '/shoe.jpeg', '/shoe.jpeg'],
        category: 'shoes',
        subCategory: 'running',
    };
    
    const navigate=useNavigate();
  const [image, setImage] = useState(productdata.image[0]);
  const [size, setSize] = useState('');
  const currency = '₹';

  const addToCart = () => {
    if (!size) {
      alert('Please select a size.');
    } else {
      alert(`Added ${productdata.name} (Size: ${size}) to cart.`);
    }
  };

  return (
    <>
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productdata.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Product ${index + 1}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='Selected Product' />
          </div>
        </div>

        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2 text-lg'>
            {'⭐'.repeat(4)}{'☆'}
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productdata.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>

          {/* Size Selector */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productdata.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={()=>navigate('/payment')}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            Buy Now
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p> 100% Original product.</p>
            <p> Cash on Delivery available.</p>
            <p>7-day easy return & exchange policy.</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Explore our collection of premium footwear, blending comfort with performance. Whether you’re a runner,
            walker, or just looking for stylish all-day wear, we have the right fit for you.
          </p>
          <p>
            These sneakers are lightweight, breathable, and designed with cutting-edge materials to provide maximum
            cushioning and durability. Step up your game with every stride.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
