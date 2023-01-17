import React from "react";

export default function Navbar() {
  var logo = require("../images/logo.png");

  return (
    <div className=" text-[#513125] bg-orange-100 w-full font-bold flex items-center px-4 py-2 ">
      <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} className="mx-1" />
      <div className=" flex justify-between w-full">
        <h1 className=" font-bold text-3xl mx-1">Yoga Roots</h1>
        <ul className=" flex items-center">
          <li className=" px-4 mx-1 hover: cursor-pointer hover:text-xl ">
            Home
          </li>
          <li className=" px-4 mx-1 hover: cursor-pointer hover:text-xl ">
            About Us
          </li>
          <li className=" px-4 mx-1 hover: cursor-pointer hover:text-xl">
            Contact
          </li>
          <li className=" px-4 mx-1 hover: cursor-pointer hover:text-xl">
            Pricing
          </li>
        </ul>
      </div>
    </div>)}