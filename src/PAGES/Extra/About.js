import React from 'react'
import Navbar from "../../COMPONENTS/Navbar/Navbar"
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from "../../COMPONENTS/Footer/Footer1"
import Footer2 from "../../COMPONENTS/Footer/Footer2"
import './Extrapages.css'


const About = () => {
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner heading="About Us"
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        
        />

        {/* left hand img coming div */}

        <div className="pgleft pgcommon">
         
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="noimg" />

          <div>
            <h1>Our Story</h1>
            <p>Lorem ipsum Lorem ipsum dolor sit amet consecteturdolor sit amet consectetur adipisicing elit. Et quis sunt recusandae libero vitae, officia repellendus quo, praesentium officiis voluptatibus sapiente voluptates. Laudantium vitae molestiae officiis nemo veritatis quod, incidunt unde molestias iure eaque deserunt?</p>
          </div>
        </div>

        {/* Right hand img coming div */}
        <div className="pgright pgcommon">
         
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="noimg" />

          <div>
            <h1>Who are we</h1>
            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consecteturamet consectetur adipisicing elit. Et quis sunt recusandae libero vitae, officia repellendus quo, praesentium officiis voluptatibus sapiente voluptates. Laudantium vitae molestiae officiis nemo veritatis quod, incidunt unde molestias iure eaque deserunt?</p>
          </div>
        </div>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default About