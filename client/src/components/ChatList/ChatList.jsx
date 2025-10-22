import React from "react";

const ChatList = () => {
  const users = ["Alice", "Bob", "Charlie"];

  return (
    <div className="flex flex-col">
      {users.map((user) => (
        <div
          key={user}
          className="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {user}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
