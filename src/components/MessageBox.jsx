import React from "react";
import { useState } from "react";
import clsx from "clsx";

const eMessageBox = ({
  imageURL,
  username,
  messageType,
  date,
  isRead = false,
}) => {
  const [read, setRead] = useState(isRead);
  const testmsg =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  return (
    <div
      className={clsx(
        "grid grid-cols-[100px_auto] m-2 rounded-[0.5rem] p-[1rem]",
        read ? "bg-white" : "bg-blue-50"
      )}
    >
      <img src={imageURL} className="w-[70px]" />
      <div className="">
        <p className="break-all hyphens-auto">
          <strong>{username} </strong>
          {messageType} {/* The absolute worst solution for unread */}
          {(() => {
            if (!read) {
              return (
                <div className="inline-block bg-red-400 w-2 h-2 rounded-full" />
              );
            }
          })()}
        </p>
        <p className="self-start">{date}</p>
      </div>
    </div>
  );
};

export const MessageBox = props => {
  const imageURL = props.imageURL;
  const username = props.username;
  const date = props.date;
  const type = props.type;
  const isRead = props.isRead ? true : false;

  const [read, setRead] = useState(isRead);
  const content = {this.props.group};
  const foreMessage = (() => {
    if (type == "FOLLOW_YOU") {
      return "followed you";
    } else if (type == "JOIN_GROUP") {
      return "has joined your group";
      //
    } else if (type == "PRIVATE_MSG") {
      return "sent you a private message";
    } else if (type == "COMMENT") {
      return "commented on your picture";
    } else if (type == "REACT") {
      return "reacted to your recent post";
    } else if (type == "LEFT_GROUP") {
      return "left the group";
    }
  })();

  {
    /* The absolute worst solution for unread */
  }
  const readMarker = () => {
    if (!read) {
      return <div className="inline-block bg-red-400 w-2 h-2 rounded-full" />;
    }
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-[100px_auto] m-2 rounded-[0.5rem] p-[1rem]",
        read ? "bg-white" : "bg-blue-50"
      )}
    >
      <img src={imageURL} className="w-[70px]" />
      <div className="">
        <p className="break-all hyphens-auto">
          <strong>{username} </strong>
          {foreMessage}
          {readMarker()}
          {content}
        </p>
        <p className="self-start">{date}</p>
      </div>
    </div>
  );
};

export default MessageBox;
