import React from "react";
import { useForm } from "react-hook-form";

const Registar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handelRegister)} className="fieldset">
        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
          className="input"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button type="submit" className="btn btn-neutral mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Registar;
