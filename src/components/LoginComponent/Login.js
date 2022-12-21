import { useEffect } from "react";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col w-full mx-auto mt-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl py-2">Welcome Back!</h1>
        <h2>
          Don't have an account?{" "}
          <span className="text-info hover:underline">
            <Link to="/signup">Register</Link>
          </span>
        </h2>
      </div>
      <form className="flex w-[95%] mx-auto">
        <div className="flex flex-col w-full py-7 px-[.35rem] ">
          <label className="label">
            <span className="label-text">
              Your email<span className="text-error"> *</span>
            </span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text">Your password</span>
          </label>
          <input
            placeholder="Enter your password"
            className="input input-bordered input-primary max-w-sm"
          />

          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>
          <button className="btn btn-block btn-primary">Log in</button>
        </div>
      </form>
      <div className="flex flex-col w-full py-7 px-[.35rem]">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="h-20 flex w-full mx-auto">
            <button className="btn gap-2 btn-outline w-[45%] my-4 mx-auto btn-primary">
              <FaGooglePlusG className="text-[1.5rem] uppercase" /> Google
            </button>
            <button className="btn gap-2 btn-outline w-[45%] my-4 mx-auto btn-primary">
              <FaFacebookF className="uppercase" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
