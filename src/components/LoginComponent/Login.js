import { useState, useEffect } from "react";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/actions/index";
import { connect } from "react-redux";
import * as yup from "yup";
import { clearForm } from "../../helpers/clearForm";

const initialState = {
  email: "",
  password: "",
};
const initialErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialState);
  const [credentialErrors, setCredentialErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  ////////// Validation //////////
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("You must enter you email address")
      .email("You must enter a valid email address"),
    password: yup
      .string()
      .required("You must enter your password")
      .min(8, "Password is at least 8 characters"),
  });

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setCredentialErrors({ ...credentialErrors, [name]: "" }))
      .catch((err) =>
        setCredentialErrors({ ...credentialErrors, [name]: err.errors[0] })
      );
  };

  // Navigation //

  const navigate = useNavigate();

  const navigateToDashboard = async () => {
    await navigate("/dashboard");
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    inputChange(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(credentials);
    localStorage.setItem("token", props.token);
    clearForm(setCredentials, initialState);
    navigateToDashboard();
  };

  useEffect(() => {
    schema.isValid(credentials).then((valid) => setDisabled(!valid));
  }, [credentials, credentialErrors, schema]);

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
      <form className="flex w-[95%] mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full py-7 px-[.35rem] ">
          <label className="label">
            <span className="label-text">
              Your email <span className="text-error">*</span>
            </span>
          </label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            placeholder="Enter your email"
            className="input input-bordered input-primary max-w-sm"
            onChange={handleChange}
          />
          <div className="text-error">{credentialErrors.email}</div>
          <label className="label">
            <span className="label-text">
              Your password
              <span className="text-error"> *</span>
            </span>
          </label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          <div className="text-error">{credentialErrors.password}</div>

          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>
          <button disabled={disabled} className="btn btn-block btn-primary">
            Log in
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
            <button className="btn gap-2 btn-outline w-[45%] my-4 mx-auto btn-primary">
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
    loggedIn: state.loggedIn,
    user: state.user,
    token: state.token,
  };
};
export default connect(mapStateToProps, { login })(Login);
