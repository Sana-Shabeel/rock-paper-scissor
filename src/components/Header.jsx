import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <div className="border-2 border-softWhite rounded-md sd:mx-2 md:max-w-2xl px-3 py-2  md:mx-auto flex justify-between mx-5">
      <img className="h-20 w-24	  md:w-auto" src={logo} alt="logo" />

      <div className="bg-white px-5   md:px-8 rounded-md md:py-2 ">
        <p className=" text-scoreText">SCORE</p>
        <p className="text-5xl md:text-7xl font-bold text-softWhite	 	">12</p>
      </div>
    </div>
  );
}

export default Header;
