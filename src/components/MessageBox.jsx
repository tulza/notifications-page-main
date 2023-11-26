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

export const MessageBox = ({
  imageURL,
  username,
  date,
  type,
  isRead,
  props,
}) => {
  const [read, setRead] = useState(isRead);
  const [foreMessage, setForeMsg] = useState("");
  const [content, setContent] = useState("");
  const handleMarkRead = () => {
    setRead(true);
  };
  {
    /* The absolute worst solution for unread */
  }
  const readMarker = () => {
    if (!read) {
      return <div className="inline-block bg-red-400 w-2 h-2 rounded-full" />;
    }
  };
  if (type == "FOLLOW_YOU") {
    setForeMsg("followed you");
  } 
  else if (type == "JOIN_GROUP") {
    setForeMsg("has joined your group");
    setContent(this.props.group);
  } 
  else if (type == "PRIVATE_MSG") {
    setForeMsg("sent you a private message");
    setContent(this.props.message);
  } 
  else if (type == "COMMENT") {
    setForeMsg("commented on your picture");
    setContent(this.props.comment);
  } 
  else if (type == "REACT") {
    setForeMsg("reacted to your recent post");
    setContent(this.props.react);
  } 
  else if (type == "LEFT_GROUP") {
    setForeMsg("left the group");
    setContent(this.props.group);
  }
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
