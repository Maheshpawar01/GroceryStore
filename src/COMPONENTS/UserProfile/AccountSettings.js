import React from 'react'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>

      <div className="form">
        <di className="form-group">
          <label htmlFor="name">Your Name<span>*</span></label>
          <input type="text" name='name' id='name' placeholder='Your Name' />
        </di>

        <di className="form-group">
          <label htmlFor="phone">Phone/Mobile<span>*</span></label>
          <input type="text" name='phone' id='phone' placeholder='Your Phone/Mobile No.' />
        </di>

        <di className="form-group">
          <label htmlFor="email">Email<span>*</span></label>
          <input type="email" name='email' id='email' placeholder='Your Email' />
        </di>
      </div>

      <button className="mainbutton1">
          Save Changes
        </button>
    </div>
  )
}

export default AccountSettings