import React from 'react'
import user from "../img/user.jpeg"

function Chats() {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={user} alt='' />
        <div className='userChatInfo'>
          <span>Munia❤️🦋</span>
          <p>Henlos vro</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={user} alt='' />
        <div className='userChatInfo'>
          <span>Rishita</span>
          <p>Oree baba</p>
        </div>
      </div>
      <div className='userChat'>
        <img src={user} alt='' />
        <div className='userChatInfo'>
          <span>Manasvi</span>
          <p>Japmann bata na kya karna hai isme</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
