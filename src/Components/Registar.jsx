import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Registar = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {
    try {
      // ✅ photo file
      const imageFile = data.photo[0];

      // ✅ upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);

      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;

      const imageRes = await axios.post(imageApiUrl, formData);
      const photoURL = imageRes.data.data.display_url;

      // ✅ create firebase user
      const result = await creatUser(data.email, data.password);

      // ✅ update firebase profile
      await updateProfile(result.user, {
        displayName: data.name,
        photoURL: photoURL,
      });

      Swal.fire({
        icon: "success",
        title: "Registration Successful 🎉",
        text: "Your account has been created successfully",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed ❌",
        text: error.message,
      });
    }
  };

  // ✅ Google Sign In
  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed in with Google",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handelRegister)} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">Photo is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full mt-4 flex gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5"
          />
          Sign Up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registar;
