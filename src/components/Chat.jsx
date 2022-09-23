import React from "react";
import Msgs from './Msgs';
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>User</span>
        <div className="chatIcons">
          <i class="video icon"></i>
          <i class="phone icon"></i>
          <i class="ellipsis horizontal icon"></i>
        </div>
      </div>
      <Msgs />
      <Input />
    </div>
  );
}

export default Chat;
