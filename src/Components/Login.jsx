import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelLogin = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  // Google Login Function
  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Logged in with Google!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Google Login Failed!",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit(handelLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-4">
          <button
            onClick={handleGoogle}
            className="w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
              className="w-5"
            />
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/registar"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
