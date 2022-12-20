import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    criteriaMode: "all",
  });

  const handleFormData = (data) => {
    console.log(data);
    console.log(errors);
  };

  useEffect(() => {
    setError(
      "Email",
      {
        types: {
          required: "Please enter your email address",
          pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
        },
      },
      "Password",
      { types: { required: true, minLength: 8 } }
    );
  }, [setError]);
  return (
    <div className="flex flex-col w-full mx-auto mt-10">
      <div className="text-center">
        <h1 className="font-bold text-2xl py-2">Create an account.</h1>
        <h2>
          Already a member?{" "}
          <span className="text-info hover:underline">
            <Link to="">Sign In</Link>
          </span>
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(handleFormData)}
        className="flex w-[95%] mx-auto"
      >
        <div className="flex flex-col w-full py-7 px-[.35rem] ">
          <label className="label">
            <span className="label-text">
              Your email<span className="text-error"> *</span>
            </span>
          </label>
          <input
            type="email"
            {...register("Email")}
            placeholder="Enter your email"
            className="input input-bordered input-primary max-w-sm"
          />
          {errors.Email && errors.Email.types && (
            <p className="pt-2 ml-2 text-error text-sm">
              {errors.Email.types.required}
            </p>
          )}
          <label className="label">
            <span className="label-text">Your password</span>
          </label>
          <input
            {...register("Password")}
            placeholder="Enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          {errors.Password && (
            <p className="pt-2 ml-2 text-error text-sm">
              {errors.Password.types.required}
            </p>
          )}
          {errors.Password && errors.Password.types && (
            <p className="pt-2 ml-2 text-error text-sm">
              {errors.Password.types.required}
            </p>
          )}
          <label className="label">
            <span className="label-text">Re-enter Password</span>
          </label>
          <input
            {...register("Repassword", { required: true, max: 119, min: 5 })}
            placeholder="Re-enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          {errors.Repassword && (
            <p className="pt-2 ml-2 text-error text-sm">
              Pease re-enter your password
            </p>
          )}
          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>
          <button className="btn btn-block btn-primary">Send</button>
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

export default Signup;
