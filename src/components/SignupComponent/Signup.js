import { useState, useEffect } from "react";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

const initialState = {
  email: "",
  username: "",
  password: "",
};
const initialErrors = {
  email: "",
  username: "",
  password: "",
};
const initialDisabled = true;

const Signup = () => {
  //this signup state will be sent to the global state in an function called
  // Register user, or something of the like
  const [signupState, setSignupState] = useState(initialState);
  console.log("Signup: signupState: ", signupState);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Validation

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Must include email address"),
    username: yup
      .string()
      .required("You must choose a username!")
      .min(3, "Username must contain at least 3 characters."),
    password: yup
      .string()
      .required("Password is required")
      .min(8, `Password must be at least 8 characters long.`),
  });

  //Helpers
  const postNewUser = (newUser) => {
    axios
      .post("http://localhost:4000/users", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("starting change");
    formSchema.isValid(signupState).then((valid) => {
      console.log("is it valid? ", valid);
      setDisabled(!valid);
    });
  }, [signupState]);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewUser(signupState);
  };

  return (
    <div className="flex flex-col w-full mx-auto mt-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl py-2">Create an account.</h1>
        <h2>
          Already a member?{" "}
          <span className="text-info hover:underline">
            <Link to="/login">Log In</Link>
          </span>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex w-[95%] mx-auto">
        <div className="flex flex-col w-full py-7 px-[.35rem] ">
          <label className="label">
            <span className="label-text">
              Your email<span className="text-error"> *</span>
            </span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={signupState.email}
            placeholder="Enter your email"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text">
              Choose a username<span className="text-error"> *</span>
            </span>
          </label>
          <input
            name="username"
            type="text"
            value={signupState.username}
            onChange={handleChange}
            placeholder="Enter a username"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text">
              Enter a password<span className="text-error"> *</span>
            </span>
          </label>
          <input
            name="password"
            type="password"
            value={signupState.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>{" "}
          <button className="btn btn-block btn-primary">Register</button>
        </div>
      </form>
      <div className="flex flex-col w-full py-7 px-[.35rem]">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="h-20 flex w-full mx-auto">
            <button className="btn gap-2 btn-outline w-[45%] my-4 mx-auto btn-primary">
              <FaGooglePlusG className="text-[1.5rem] uppercase" /> Google
            </button>
            <button className="btn gap-2 btn-outline w-[45%] my-4 mx-auto btn-primary ">
              <FaFacebookF className="uppercase" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
