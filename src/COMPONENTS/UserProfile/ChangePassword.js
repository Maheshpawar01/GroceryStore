import React from 'react'

const ChangePassword = () => {
  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Change Password</h1>

      <div className="form">
        <di className="form-group">
          <label htmlFor="oldpass">Old Password<span>*</span></label>
          <input type="password"  />
        </di>
        <di className="form-group">
          <label htmlFor="newpass">New Password<span>*</span></label>
          <input type="password"  />
        </di>
      </div>
      <button className="mainbutton1">
          Save Changes
        </button>
    </div>
  )
}

export default ChangePassword