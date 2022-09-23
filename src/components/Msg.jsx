import React from 'react'
import user from "../img/user.jpeg"

function Msg() {
  return (
    <div className='msg owner'>
      <div className="msgInfo">
        <img src={user} />
        <span>Just now</span>
      </div>
      <div className="msgContent">
        <p>Hello</p>
        <img src={user} />
      </div>
    </div>
  )
}

export default Msg
