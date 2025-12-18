import React, { useContext } from "react";
import Logo from "./Logo";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Logout Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  const links = (
    <>
      <li className="font-bold">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-md sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="navbar-end">
            <button
              onClick={handelLogout}
              className="bg-red-500 text-white font-bold btn"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="login" className="btn">
              Login
            </Link>
          </div>
        )}
        <Link to="/ridar" className="btn bg-[#CAEB66] mx-3 text-black">
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
