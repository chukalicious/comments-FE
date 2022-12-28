import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions/index";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const Signup = (props) => {
  // Local State //
  const [signupState, setSignupState] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Validation //

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

  const validateSchema = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const clearForm = () => {
    setSignupState(initialState);
  };

  const inputChange = (name, value) => {
    validateSchema(name, value);
    setSignupState({
      ...signupState,
      [name]: value, // NOT AN ARRAY
    });
  };

  const handleChange = (e) => {
    const valueToUse = e.target.value;
    inputChange(e.target.name, valueToUse);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signup(signupState);
    clearForm();
  };

  useEffect(() => {
    formSchema.isValid(signupState).then((valid) => setDisabled(!valid));
  }, [signupState, formErrors, formSchema]);

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
          <div className="label text-error">{formErrors.email}</div>
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
          <div className="label text-error">{formErrors.username}</div>
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
          <div className="label text-error">{formErrors.password}</div>
          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>{" "}
          <button disabled={disabled} className="btn btn-block btn-primary">
            Register
          </button>
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

const mapStateToProps = (state) => {
  return {
    username: state.user,
    isLoading: state.isLoading,
    loggedIn: state.loggedIn,
    error: state.error,
  };
};
export default connect(mapStateToProps, { signup })(Signup);
