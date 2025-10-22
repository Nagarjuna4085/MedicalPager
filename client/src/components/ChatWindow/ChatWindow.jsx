import React from "react";

const ChatWindow = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
      <h2 className="text-2xl font-bold mb-2">Welcome to ChatApp</h2>
      <p>Select a user from the sidebar to start chatting.</p>
      <p className="mt-4 text-sm">
        You can also create new chats or search existing ones.
      </p>
    </div>
  );
};

export default ChatWindow;
