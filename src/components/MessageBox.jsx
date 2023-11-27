import React, { useEffect } from "react";
import { useState } from "react";
import clsx from "clsx";

export const MessageBox = ({
  imageURL,
  username,
  date,
  type,
  countNoti,
  ...props
}) => {
  const isRead = props.isRead ? true : false;
  const [read, setRead] = useState(isRead);
  let content = props.content;

  useEffect(() => {
    setRead(isRead);
  }, [isRead]);
  const foreMessage = ((type) => {
    if (type == "FOLLOW_YOU") {
      return "followed you";
    } //
    else if (type == "PRIVATE_MSG") {
      content = <span className="MessageLink">{content}</span>;
      return "sent you a private message";
    } //
    else if (type == "JOIN_GROUP") {
      content = <a className="Group">{content}</a>;
      return "has joined your group";
    } //
    else if (type == "LEFT_GROUP") {
      content = <a className="Group">{content}</a>;
      return "left the group";
    } //
    else if (type == "COMMENT") {
      content = <span className="MessageLink">{content}</span>;
      return "commented on your picture";
    } //
    else if (type == "REACT") {
      content = <span className="MessageLink">{content}</span>;
      return "reacted to your recent post";
    } //
    return;
  })(type);

  {
    /* The absolute worst solution for unread */
  }
  const readMarker = () => {
    if (!read) {
      return (
        <span className="inline-block bg-red-400 w-2.5 h-2.5  rounded-full mb-0.5" />
      );
    }
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-[100px_auto] m-2 rounded-[0.5rem] p-[1rem] transition-colors duration-500",
        read ? "bg-white" : "bg-blue-50"
      )}
    >
      <img src={imageURL} className="w-[70px]" />
      <div className="text-[1.25rem]">
        <p>
          <a className="Username">{username} </a>
          <span className="ForeMessage">{foreMessage} </span>
          {content} {readMarker()}
        </p>
        <p className="DateLabel">{date}</p>
      </div>
    </div>
  );
};

export default MessageBox;
