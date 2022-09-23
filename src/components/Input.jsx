import React from "react";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message..." />
      <div className="send">
        <i class="google drive icon large"></i>
        <input type="file" id="file1" style={{display: "none"}}/>
        <label htmlFor="file1"><i class="images icon large"></i></label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
