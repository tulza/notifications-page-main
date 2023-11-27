import React from "react";

const NotifBoxHeader = ({ setReadAll, notiCount }) => {
  return (
    <div className="py-4 flex justify-between items-end">
      <div className="flex items-center">
        {/* notification */}
        <span className="text-[32px] font-bold">Notification</span>
        <div className="bg-blue-950 text-white ml-2 px-3 rounded-[6px] font-bold">
          {notiCount}
        </div>
      </div>
      <a
        className="text-[20px]"
        href="#"
        onClick={() => {
          setReadAll(true);
        }}
      >
        mark all as read
      </a>
    </div>
  );
};

export default NotifBoxHeader;
