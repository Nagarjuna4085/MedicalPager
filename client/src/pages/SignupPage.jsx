import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="bg-chat-bg h-screen flex flex-col justify-center items-center">
      <div className="w-full bg-card  rounded-2xl shadow-2xl max-w-sm p-7">
        <h2 className="text-primary text-2xl text-center mb-6 font-bold">
          Sign Up
        </h2>
        <form className="flex flex-col gap-4 justify-center items-center mt-2 ">
          <input
            className=" w-full p-2 rounded-xl border border-border "
            placeholder="Enter Email"
            type="email"
          />
          <input
            className="w-full p-2 rounded-xl border border-border"
            placeholder="Enter password"
            type="password"
          />
          <button className="w-full p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-80 hover:scale-105 transition-all">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-muted-foreground mt-2">
          You have alrady an account click here to{" "}
          <Link to="/" className="text-primary hover:underline text-lg">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
