import React from "react";
import { useState } from "react";
import clsx from "clsx";

const MessageBox = ({
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

export default MessageBox;
