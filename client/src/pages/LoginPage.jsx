import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen bg-chat-bg  flex flex-col justify-center items-center">
      <div className="bg-card p-5 w-full max-w-sm rounded-lg shadow-lg">
        <h2 className=" text-2xl text-center font-bold text-primary mb-6">
          Sign In
        </h2>
        <form className="flex flex-col gap-4 mt-2 ">
          <input
            placeholder="Enter Mail"
            type="email"
            className="w-full p-2 rounded border border-border focus:ring-2 focus:ring-secondary"
          />
          <input
            placeholder="Enter password"
            type="password"
            className="w-full p-2 rounded border border-border focus:ring-2 focus:ring-secondary"
          />
          <button
            type="submit"
            value="Submit"
            className="w-full text-primary-foreground rounded py-2 bg-primary hover:opacity-90 hover:scale-105 transition-all"
          >
            Login In
          </button>
          <p className="text-sm mt-4 text-muted-foreground text-center">
            Don't have an account{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
