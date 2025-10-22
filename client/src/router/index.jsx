import { createBrowserRouter } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/chat",
    element: (
      <ChatLayout>
        <ChatPage />
      </ChatLayout>
    ),
  },
]);

export default router;
