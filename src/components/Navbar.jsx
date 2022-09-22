import React from 'react'
import user from "../img/user.jpeg"

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>
      Chat <i className="rocketchat icon big"></i>
      </span>
      <div className='user'>
        <img src={user} alt='' />
        <span>Japz</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
