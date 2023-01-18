import React from "react";

export default function Contact() {
  var joinBg = require("../images/joinBg.png");
  var joinMainBg = require("../images/joinMainBg.png");

  return (
    <div
      className=" h-[100vh] px-72 py-32 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${joinBg})` }}
    >
      <div
        className="main h bg-cover bg-center h-[95%] w-[100%] bg-[#C47A5E] flex flex-col justify-center justify-items-center items-center text-center "
        style={{ backgroundImage: `url(${joinMainBg})` }}
      >
        <h1 className="text-3xl text-white  "> BECOME A MEMBER </h1>
      <p className="text-xl text-white px-10 py-2 mx-5 my-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Stoici scilicet. Age sane, inquam. Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? </p>
      
      <button type="button" className=" w-1/4 text-[#513125] text-xl bg-white my-7 hover:bg-[#513125] hover:text-white hover:border-2 hover:border-white font-medium  px-5 py-1.5 mr-2 mb-2  border-2 border-[#513125] focus:ring-4 focus:ring-yellow-300">Join Us</button>

      </div>

      
    </div>
  );
}
