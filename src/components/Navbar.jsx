import React from 'react'
import user from "../img/user.jpeg"
import {signOut} from "firebase/auth"
import { auth } from '../firebase'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>
      Chat <i className="rocketchat icon big"></i>
      </span>
      <div className='user'>
        <img src={user} alt='' />
        <span>Japz</span>
        <button onClick={() => signOut(auth) }>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
