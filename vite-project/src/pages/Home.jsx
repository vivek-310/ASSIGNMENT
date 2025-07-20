import React from 'react'
import ProductPage from '../components/ProductPage'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <div className='px-14'>
        <Navbar/>
        <div>
            <ProductPage />
        </div>
    </div>
  )
}

export default Home