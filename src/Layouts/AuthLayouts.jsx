import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImage from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-8">
        <Logo></Logo>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
