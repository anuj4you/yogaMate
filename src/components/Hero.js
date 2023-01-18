import React from 'react'

export default function Hero() {

    var heroBackground = require("../images/heroBackground.png");
    var pose = require("../images/pose1.png");


  return (
    <div className=' bg-white h-[93vh] grid grid-cols-2 auto-cols-auto pr-0 px-5 py-0'>
    <div className="left flex flex-col">
    
    <h3 className=' font-medium text-2xl py-5 px-4 mt-32 text-[#C47A5E]'>NAMASTE </h3>
    <h2 className=' cormorant text-4xl py-5 px-4 text-[#513125] ' >BEND YOUR MIND,<br/> INSPIRE YOURSELF</h2>
    <p className=' py-5 px-4 text-[#7B7B7B] text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Blanditiis enim tenetur dolor tempore nam in fugiat illum itaque quam, sunt, quo soluta totam, sed aut. Possimus, corrupti ad. Quis, perspiciatis?</p>
    
    <div className="buttons py-5 px-4 pb-3 mt-5 flex justify-around">
    <button type="button" className=" w-4/12 focus:outline-none text-white bg-[#C47A5E] hover:border-2 border-[#513125] hover:text-[#513125] focus:ring-4 focus:ring-yellow-300 font-medium  text-base px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Learn more</button>
    <button type="button" className=" w-4/12 text-[#513125] bg-transparent hover:bg-[#C47A5E] hover:text-white  font-medium  text-base px-5 py-1.5 mr-2 mb-2  border-2 border-[#513125] focus:ring-4 focus:ring-yellow-300">Contact Us</button></div>

    </div>
    <div className="right flex justify-center items-center bg-no-repeat bg-cover bg-center  " style={{backgroundImage: `url(${heroBackground})`}}>
    
    <img src={pose} alt="pic" style={{width:"80%"}} />
    
    </div>
    

    </div>
  )
}
