import React from "react";
import Button from "../components/button/Button";
import Layout from "../components/Layout";

const Login = () => {
  const [isSignup, setIsSign] = React.useState<boolean>(false);
  return (
    <Layout>
      <div className="w-full my-28 max-w-[1440px] mx-auto flex items-center justify-center">
        <form
          action=""
          className="w-full max-w-[400px] flex flex-col items-center gap-4 justify-center"
        >
          <label
            htmlFor=""
            className="text-3xl font-Roboto tracking-[-0.05em] font-extrabold"
          >
            {isSignup ? "Sign Up" : "Login"}
          </label>
          {isSignup && (
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
              className="w-full py-2 px-3 border border-gray-400"
            />
          )}

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            className="w-full py-2 px-3 border border-gray-400"
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            className="w-full py-2 px-3 border border-gray-400"
          />
          <div className="w-full flex items-center justify-between">
            <p className="font-satoshi text-sm cursor-pointer">
              Forgot your password?
            </p>
            <p
              className="font-satoshi text-sm cursor-pointer"
              onClick={() => setIsSign(!isSignup)}
            >
              {isSignup ? "Login Here" : "Create account"}
            </p>
          </div>
          {isSignup ? (
            <Button label="Sign up" variant="primary" type="submit" />
          ) : (
            <Button label="Sign in" variant="primary" type="submit" />
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
