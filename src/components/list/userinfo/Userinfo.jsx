import React from "react";
import "./Userinfo.css";
import { useUserStore } from "../../../lib/useStore";

const Userinfo = () => {
  const { currentUser } = useUserStore();
  
  return (
    <div className="userInfo">
      <div className="userInfo__user">
        <img
          src={currentUser.avatar || "./avatar.png"}
          alt="User Avatar"
          className="userInfo__avatar"
        />
        <h2 className="userInfo__name">{currentUser.username}</h2>
      </div>
      <div className="userInfo__icons">
        <img src="./more.png" alt="More Icon" className="userInfo__icon" />
        <img src="./video.png" alt="Video Icon" className="userInfo__icon" />
        <img src="./edit.png" alt="Edit Icon" className="userInfo__icon" />
      </div>
    </div>
  );
};

export default Userinfo;
