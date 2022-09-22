import React from "react";

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
    </div>
  );
}

export default Chat;
