import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Registar = () => {
  const { creatUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    const profileImage = data.photo[0];

    creatUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImage);
        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host
        }`;
        axios.post(imageApiUrl, formData).then((res) => {
          // console.log(res.data);
          const photoURL = res.data.data.url;
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          updateUserProfile(userProfile)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google Login
  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Signed in with Google",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Google Sign-In Failed",
          text: err.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handelRegister)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Image Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Photo
            </label>

            <input
              type="file"
              {...register("photo", { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">Photo is required</p>
            )}
          </div>

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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>

        {/* Google Register Button */}
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
            <span>Sign Up with Google</span>
          </button>
        </div>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registar;
