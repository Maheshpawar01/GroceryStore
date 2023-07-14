import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <SingleBanner heading="My Cart"
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        
        />
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Cart