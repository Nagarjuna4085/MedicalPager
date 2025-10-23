import { ListFilter, UserPlus, User } from "lucide-react";

const ChatList = ({ show = true }) => {
  // Dummy users
  const users = [
    {
      name: "Alice",
      profileImage: "",
      latestMsg: "Hello!,How are you and I hope you are doing well!",
      date: "Yesterday",
      newMessagesCount: 2,
    },
    {
      name: "Bob",
      profileImage: "",
      latestMsg: "How are you?",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Charlie",
      profileImage: "",
      latestMsg: "See you soon",
      date: "Today",
      newMessagesCount: 1,
    },
    {
      name: "Diana",
      profileImage: "",
      latestMsg: "Thanks!",
      date: "Yesterday",
      newMessagesCount: 0,
    },
    {
      name: "Eve",
      profileImage: "",
      latestMsg: "Let's meet",
      date: "2 days ago",
      newMessagesCount: 3,
    },
    {
      name: "Frank",
      profileImage: "",
      latestMsg: "Good morning",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Grace",
      profileImage: "",
      latestMsg: "What's up?",
      date: "Yesterday",
      newMessagesCount: 1,
    },
    {
      name: "Hank",
      profileImage: "",
      latestMsg: "See you tomorrow",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Ivy",
      profileImage: "",
      latestMsg: "Can you call me?",
      date: "2 days ago",
      newMessagesCount: 2,
    },
    {
      name: "Jack",
      profileImage: "",
      latestMsg: "Meeting at 3pm",
      date: "Yesterday",
      newMessagesCount: 0,
    },
    {
      name: "Karen",
      profileImage: "",
      latestMsg: "Check this out",
      date: "Today",
      newMessagesCount: 4,
    },
    {
      name: "Leo",
      profileImage: "",
      latestMsg: "LOL 😂",
      date: "Yesterday",
      newMessagesCount: 0,
    },
    {
      name: "Mona",
      profileImage: "",
      latestMsg: "Thanks for the help",
      date: "Today",
      newMessagesCount: 1,
    },
    {
      name: "Nina",
      profileImage: "",
      latestMsg: "Happy Birthday!",
      date: "2 days ago",
      newMessagesCount: 0,
    },
    {
      name: "Oscar",
      profileImage: "",
      latestMsg: "On my way",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Paul",
      profileImage: "",
      latestMsg: "Got it",
      date: "Yesterday",
      newMessagesCount: 1,
    },
    {
      name: "Quinn",
      profileImage: "",
      latestMsg: "See you later",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Rachel",
      profileImage: "",
      latestMsg: "Check email",
      date: "2 days ago",
      newMessagesCount: 3,
    },
    {
      name: "Sam",
      profileImage: "",
      latestMsg: "Thanks!",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Tina",
      profileImage: "",
      latestMsg: "Call me when free",
      date: "Yesterday",
      newMessagesCount: 1,
    },
    {
      name: "Uma",
      profileImage: "",
      latestMsg: "Great job!",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Victor",
      profileImage: "",
      latestMsg: "Where are you?",
      date: "Yesterday",
      newMessagesCount: 2,
    },
    {
      name: "Wendy",
      profileImage: "",
      latestMsg: "See you soon",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Xander",
      profileImage: "",
      latestMsg: "Hello there",
      date: "2 days ago",
      newMessagesCount: 1,
    },
    {
      name: "Yara",
      profileImage: "",
      latestMsg: "Thanks a lot",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Zane",
      profileImage: "",
      latestMsg: "On my way",
      date: "Yesterday",
      newMessagesCount: 3,
    },
    {
      name: "Amy",
      profileImage: "",
      latestMsg: "Can we talk?",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "Brian",
      profileImage: "",
      latestMsg: "See you tomorrow",
      date: "Yesterday",
      newMessagesCount: 1,
    },
    {
      name: "Cathy",
      profileImage: "",
      latestMsg: "Thanks!",
      date: "Today",
      newMessagesCount: 0,
    },
    {
      name: "David",
      profileImage: "",
      latestMsg: "Got it",
      date: "2 days ago",
      newMessagesCount: 2,
    },
  ];

  // Conditional rendering for small devices
  if (!show) return null;

  return (
    <div className="flex flex-col  border border-border h-screen">
      {/* header */}
      <div className="flex justify-between px-1 py-2 bg-primary text-secondary">
        <div className="font-bold">Chats</div>
        <div className="flex gap-3">
          <UserPlus />
          <ListFilter />
        </div>
      </div>

      {/* input */}
      <div className="w-full">
        <input
          placeholder="search or start new chat"
          className="p-2 border border-amber-100 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </div>
      <div className="flex-1 overflow-y-auto mt-3">
        {users.map((user) => (
          <div
            key={user.name}
            className="flex justify-between p-2 border border-amber-50 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-center  items-center gap-2 min-w-0">
              {/* user photo */}
              <div className="mr-1 shrink-0">
                <User />
              </div>
              {/* username and latest message */}
              <div className="flex flex-col min-w-0">
                <div className="text-xl font-bold text-primary truncate">
                  {user.name}
                </div>
                <div className=" truncate text-gray-600 ">{user.latestMsg}</div>
              </div>
            </div>
            {/* date and new message count */}
            <div className="flex flex-col items-end justify-between  min-w-0">
              {/* date */}
              <div className="text-xs text-muted-foreground truncate">
                {user.date}
              </div>
              {user.newMessagesCount > 0 && (
                <div className="text-xs bg-secondary text-white px-2 py-0.5 rounded-full">
                  {user.newMessagesCount}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
