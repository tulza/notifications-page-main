import React from "react";
import MessageBox from "./messageBox";
import PrivateMessageBox from "./PrivateMessageBox.jsx";
import NotifBoxHeader from "./NotifBoxHeader.jsx";
import {
  avatarAngelaGray,
  avatarAnnaKim,
  avatarJacobThompson,
  avatarKimberlySmith,
  avatarMarkWebber,
  avatarNathanPeterson,
  avatarRizkyHasanuddin,
  favicon32x32,
  imageChess,
} from "./ImageAsset.jsx";

const NotifBox = () => {
  return (
    <div className="w-[1100px]">
      {/*  */}
      <div className="bg-white p-12 pb-4 rounded-[32px]">
        <NotifBoxHeader />
        <MessageBox
          imageURL={avatarMarkWebber}
          username="Mark Webber"
          type="REACT"
          date="1m ago"
          content="My first tournament today"
        />
        <MessageBox
          imageURL={avatarAngelaGray}
          username="Angela Gray"
          type="FOLLOW_YOU"
          date="5m ago"
        />
        <MessageBox
          imageURL={avatarJacobThompson}
          username="Jacob Thompson"
          type="JOIN_GROUP"
          date="1 day ago"
          group="Chess Club"
          content="Chess Club"
        />
        <MessageBox
          imageURL={avatarRizkyHasanuddin}
          username=" Rizky Hasanuddin"
          type="PRIVATE_MSG"
          date="5 days ago"
          content="Chess Club"
        />
        <MessageBox
          imageURL={avatarKimberlySmith}
          username="Kimberly Smith"
          type="COMMENT"
          date="1 week ago"
        />
        <MessageBox
          imageURL={avatarNathanPeterson}
          username="Nathan Peterson"
          type="REACT"
          date="2 weeks ago"
          content="5 end-game strategies to increase your win rate"
        />
        <MessageBox
          imageURL={avatarAnnaKim}
          username="Anna Kim"
          type="LEFT_GROUP"
          date="2 weeks ago"
          content="Chess Club"
        />
      </div>
    </div>
  );
};

export default NotifBox;
