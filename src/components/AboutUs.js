import React from "react";

export default function AboutUs() {
  return (
    <div className=" h-[95vh] flex flex-col justify-center justify-items-center text-center">
      <h4 className="font-bold text-2xl py-1 px-4 text-[#C47A5E]">About Us </h4> <hr />
      <h5 className="cormorant text-4xl py-1 px-4 text-[#513125]">IT'S ALL YOGA, ALL THE TIME</h5>

      <div className=" grid grid-cols-2 gap-4 justify-items-center px-4 py-4">
        <div className=" h-64 flex flex-col items-center justify-center text-center bg-[#C47A5E] px-3 py-2 mx-3 my-3 w-7/12 ">
          
            <h3 className="text-2xl font-semibold text-white dark:text-white  ">
              COMFORT PLACE 
            </h3>
            <p className="my-4 font-light text-[#D9D9D9]">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NEGAT ESSE EAM, INQUIT, PROPTER SE EXPETENDAM. AT HOC IN EO M. SI VERBUM
            </p>
          
          
        </div>
        <div className=" h-64 flex flex-col items-center justify-center text-center bg-[#513125] px-3 py-2 mx-3 my-3 w-7/12 ">
          
            <h3 className="text-2xl font-semibold text-white dark:text-white  ">
              EXPERT TRAINER
            </h3>
            <p className="my-4 font-light text-[#D9D9D9] ">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NEGAT ESSE EAM, INQUIT, PROPTER SE EXPETENDAM. AT HOC IN EO M. SI VERBUM
            </p>
          
          
        </div>
        <div className=" h-64 flex flex-col items-center justify-center text-center bg-[#FFEFD1] px-3 py-2 mx-3 my-3 w-7/12 ">
          
            <h3 className="text-2xl font-semibold text-[#513125] dark:text-white  ">
              FRIENDLY PLACE 
            </h3>
            <p className="my-4 font-light text-[#936351] ">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NEGAT ESSE EAM, INQUIT, PROPTER SE EXPETENDAM. AT HOC IN EO M. SI VERBUM
            </p>
          
          
        </div>
        <div className=" h-64 flex flex-col items-center justify-center text-center bg-[#C47A5E] px-3 py-2 mx-3 my-3 w-7/12 ">
          
            <h3 className="text-2xl font-semibold text-white dark:text-white  ">
              BEST REVIEWS 
            </h3>
            <p className="my-4 font-light">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NEGAT ESSE EAM, INQUIT, PROPTER SE EXPETENDAM. AT HOC IN EO M. SI VERBUM
            </p>
          
          
        </div>


      </div>
    </div>
  )}