import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const Signup = () => {
  return (
    <div className='authpage'>
        <Navbar reloadnavbar={false}/>

        <div className="authcont">
            <img src="https://www.wallpaperbetter.com/wallpaper/796/852/888/fruits-berries-plate-peaches-cherries-1080P-wallpaper-middle-size.jpg" alt="signup" />

            <form action="" className="asuthform">
                <h1>Signup</h1>

                <div className="form-group-row">
                <div className="formgroup">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id='fname' />
                </div>

                <div className="formgroup">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id='lname' />
                </div>
                </div>

              

                <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                </div>

              <div className="form-group-row">
              <div className="formgroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' />
                </div>

                <div className="formgroup">
                    <label htmlFor="cpassword"> Confirm Password</label>
                    <input type="password" id='cpassword' />
                </div>
              </div>

                <Link to="/login" className='stylenone'>
                <p>Already have an account?</p>
                </Link>
               
                <Link to="/signup" className='stylenone'><button className='btn'>Singup</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Signup