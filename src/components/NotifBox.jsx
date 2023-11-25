import React from "react";
import MessageBox from "./messageBox";
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
      <div className="bg-white p-12 rounded-[32px]">
        <div className="py-4 flex justify-between items-end">
          <div className="flex items-center">
            {/* notification */}
            <span className="text-[32px] font-bold">Notification</span>
            <div className="bg-blue-950 text-white ml-2 px-3 rounded-[6px] font-bold">
              3
            </div>
          </div>
          <a className="text-[20px]" href="#">
            mark all as read
          </a>
        </div>
        <MessageBox
          imageURL={avatarMarkWebber}
          username="Mark Webber"
          messageType="reacted to your recent post My first tournament today!"
          date="1m ago"
        />
        <MessageBox
          imageURL={avatarAngelaGray}
          username="Angela Gray"
          messageType="followed you"
          date="5m ago"
        />
        <MessageBox
          imageURL={avatarJacobThompson}
          username="Jacob Thompson"
          messageType="has joined your group Chess Club"
          date="1 day ago"
        />
        <MessageBox
          imageURL={avatarRizkyHasanuddin}
          username=" Rizky Hasanuddin"
          messageType="sent you a private message"
          date="5 days ago"
          isRead={true}
        />
        <MessageBox
          imageURL={avatarKimberlySmith}
          username="Kimberly Smith"
          messageType="commented on your picture"
          date="1 week ago"
          isRead={true}
        />
        <MessageBox
          imageURL={avatarNathanPeterson}
          username="Nathan Peterson"
          messageType="reacted to your recent post 5 end-game strategies to increase your win rate"
          date="2 weeks ago"
          isRead={true}
        />
        <MessageBox
          imageURL={avatarAnnaKim}
          username="Anna Kim"
          messageType="left the group Chess Club"
          date="2 weeks ago"
          isRead={true}
        />
      </div>
    </div>
  );
};

export default NotifBox;
