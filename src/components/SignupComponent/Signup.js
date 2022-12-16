import { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormData = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="flex flex-col w-full mx-auto">
      <form
        onSubmit={handleSubmit(handleFormData)}
        className="flex w-[95%] mx-auto"
      >
        <div className="flex flex-col w-full py-7 px-[.35rem] ">
          <label className="label">
            <span className="label-text">You email</span>
          </label>
          <input
            type="email"
            {...register(
              "Email",
              { required: true, max: 120 },
              {
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }
            )}
            aria-invalid={errors.firstName ? "true" : "false"}
            placeholder="Enter your email"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text">Your password</span>
          </label>
          <input
            {...register("Password", { required: true, max: 119, min: 5 })}
            placeholder="Enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text">Re-enter Password</span>
          </label>
          <input
            {...register("Repassword", { required: true, max: 119, min: 5 })}
            placeholder="Re-enter your password"
            className="input input-bordered input-primary max-w-sm"
          />
          <label className="label">
            <span className="label-text-alt text-error">Forgot Password?</span>
          </label>
          <button className="btn btn-block btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
