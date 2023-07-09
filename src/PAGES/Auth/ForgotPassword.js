import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const ForgotPassword = () => {
  return (
    <div className='authpage'>
        <Navbar/>

        <div className="authcont">
            <img src="https://www.wallpaperbetter.com/wallpaper/796/852/888/fruits-berries-plate-peaches-cherries-1080P-wallpaper-middle-size.jpg" alt="signup" />

            <form action="" className="authform">
                <h1>Forgot Password</h1>

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
                    <label htmlFor="cpassword"> Confirm New Password</label>
                    <input type="password" id='cpassword' />
                </div>
              </div>

                <Link to="/login" className='stylenone'>
                <p>Go to Login?</p>
                </Link>
               
                <Link to="/signup" className='stylenone'><button className='btn'>Verify</button></Link>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword