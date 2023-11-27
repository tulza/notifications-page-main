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
import { useState } from "react";

const NotifBox = () => {
  const [readAll, setReadAll] = useState();
  let NotiCount = 0;
  const addCount = () => {
    NotiCount++;
    console.log(NotiCount);
  };

  return (
    <div className="w-[1000px]">
      {/*  */}
      <div className="bg-white p-12 pb-4 rounded-[32px]">
        <NotifBoxHeader setReadAll={setReadAll} notiCount={NotiCount} />
        <MessageBox
          imageURL={avatarMarkWebber}
          username="Mark Webber"
          type="REACT"
          date="1m ago"
          content="My first tournament today!"
          isRead={false || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarAngelaGray}
          username="Angela Gray"
          type="FOLLOW_YOU"
          date="5m ago"
          isRead={false || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarJacobThompson}
          username="Jacob Thompson"
          type="JOIN_GROUP"
          date="1 day ago"
          group="Chess Club"
          content="Chess Club"
          isRead={false || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarRizkyHasanuddin}
          username=" Rizky Hasanuddin"
          type="PRIVATE_MSG"
          date="5 days ago"
          isRead={true || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarKimberlySmith}
          username="Kimberly Smith"
          type="COMMENT"
          date="1 week ago"
          isRead={true || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarNathanPeterson}
          username="Nathan Peterson"
          type="REACT"
          date="2 weeks ago"
          content="5 end-game strategies to increase your win rate"
          isRead={true || readAll}
          countNoti={addCount}
        />
        <MessageBox
          imageURL={avatarAnnaKim}
          username="Anna Kim"
          type="LEFT_GROUP"
          date="2 weeks ago"
          content="Chess Club"
          isRead={true || readAll}
          countNoti={addCount}
        />
      </div>
    </div>
  );
};

export default NotifBox;
