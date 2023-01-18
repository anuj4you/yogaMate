import React from "react";

export default function Benefits() {

    var benefitBg = require("../images/benefitBg.png");
    var pose8 = require("../images/pose8.png");
    var pose3 = require("../images/pose3.png");
    var pose5 = require("../images/pose5.png");
    var pose2 = require("../images/pose2.png");

  return (
    <div className=" bg-orange-50 h-[100vh] px-5 py-3 flex flex-col justify-center bg-no-repeat bg-cover bg-center " style={{backgroundImage: `url(${benefitBg})`}}>
      <h3 className=" text-[#513125] text-4xl flex justify-center font-bold cormorant py-1 my-1">
        Benefits of yoga
      </h3>
      <p className="text-lg text-center text-[#4C4C4C] px-32 my-1 w-2/3 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eius
        est error, nulla quia quae harum ipsa, alias quas architecto aliquam{" "}
      </p>

      <div className="cards flex flex-wrap justify-evenly my-2 mx-3 ">
        <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
        <img src={pose8} alt="pic" style={{width:"27%", margin:"auto"}} />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
            Strong Body Life
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum labore placeat provident.
          </p>
        </div>
        <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
        <img src={pose3} alt="pic" style={{width:"27%", margin:"auto"}} />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
            Increased Flexibility
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum labore placeat provident.
          </p>
        </div>
        <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
        <img src={pose5} alt="pic" style={{width:"27%", margin:"auto"}} />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
            Increases Blood Flow
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum labore placeat provident.
          </p>
        </div>
        <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          
        <img src={pose2} alt="pic" style={{width:"27%", margin:"auto"}} />
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
            Drops Blood Pressure
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum labore placeat provident.
          </p>
        </div>
      </div>
    </div>
  );
}
