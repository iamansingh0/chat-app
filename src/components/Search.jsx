import React from "react";
import user from "../img/user.jpeg";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search a user" />
      </div>
      <div className="userChat">
        <img src={user} alt="" />
        <div className="userChatInfo">
          <span>Aman</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
