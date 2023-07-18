import React from 'react'
import './UserProfile.css'
import { useParams } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner';
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings'
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword';

const UserProfile = () => {

    const {activepage}= useParams();

  
  return (
    <div className='userprofile'>
    <Navbar/>
    <SingleBanner heading="My Profile"
        bannerimage="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
     />
    {/* user profile left coloumn section */}
     <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage}/>
            
        </div>
        {/* user profile right section */}
        <div className="right">
            {activepage === 'accountsettings' && <AccountSettings/> }
            {activepage === 'changepassword' && <ChangePassword/>}
        </div>
     </div>
   
    <Footer1/>
    <Footer2/>
   </div>
  )
}

export default UserProfile