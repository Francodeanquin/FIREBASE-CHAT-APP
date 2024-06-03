import React from "react";
import "./Detail.css";
import { auth } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/useStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Detail = () => {
  const { user, isReceiverBlocked, changeBlock, isCurrentUserBlocked } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="detail">
      <div className="detail__user">
        <img
          src={user?.avatar || "./avatar.png"}
          alt="User Avatar"
          className="detail__avatar"
        />
        <h2 className="detail__username">{user?.username}</h2>
        <p className="detail__bio">
          Lorem ipsum dolor, sit amet consectetur adipisicing e
        </p>
      </div>
      <div className="detail__info">
        <div className="detail__option">
          <div className="detail__title">
            <span className="detail__text">Chat Settings</span>
            <img src="./arrowUp.png" alt="Arrow Up" className="detail__icon" />
          </div>
        </div>
        <div className="detail__option">
          <div className="detail__title">
            <span className="detail__text">Privacy & help</span>
            <img src="./arrowUp.png" alt="Arrow Up" className="detail__icon" />
          </div>
          <div className="detail__option">
            <div className="detail__title">
              <span className="detail__text">Shared Photos</span>
              <img
                src="./arrowDown.png"
                alt="Arrow Down"
                className="detail__icon"
              />
            </div>
            <div className="detail__photos">
            
            
            
              <div className="detail__photoItem">
                <div className="detail__photoDetail">
                  <img
                    src="https://randomwordgenerator.com/img/picture-generator/5fe3dd42425bb10ff3d8992cc12c30771037dbf85254794075277ad79345_640.jpg"
                    alt="Photo 4"
                    className="detail__photo"
                  />
                  <span className="detail__photoName">Photo_2024_2.png</span>
                </div>
                <img
                  src="./download.png"
                  className="detail__downloadIcon"
                  alt="Download Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="detail__option">
          <div className="detail__title">
            <span className="detail__text">Shared Files</span>
            <img src="./arrowUp.png" alt="Arrow Up" className="detail__icon" />
          </div>
        </div>
        <button onClick={handleBlock} className="detail__blockButton">
          {isCurrentUserBlocked
            ? "you are blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="detail__logoutButton" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
