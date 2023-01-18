import React from "react";

export default function Footer() {
  return (
    <div className=" h-[35vh] bg-black text-slate-100 pt-4 px-2 ">
      <div className="upper h-[60%] flex flex-wrap justify-evenly text-left px-3 py-2 ">
        <div className="reach">
          <h3 className="text-2xl font-bold">Reach Us</h3><hr />
          <ul>
            <li>☏ +91 658 952 3648</li>
            <li>✉️ yogaroots@yogaroots.com</li>
            <li>📍 Seattle, US</li>
          </ul>
        </div>
        <div className="links">
          <h3 className="text-2xl font-bold">Quick Links</h3> <hr />
          <ul>
            <li>Home</li>
            <li>Benefits</li>
            <li>Contact Us</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="follow">
          <h3 className="text-2xl font-bold">Follow Us </h3> <hr />
          <ul>
            <li>Instagram</li>
            <li>Facebook </li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="lower flex flex-col justify-center justify-items-center text-center ">
        <h2 className="text-l my-2 font-bold ">YOGA ROOTS</h2>
        <hr />
        <p className="my-1"> © 2023 Transform CA, Anuj Kumar ❤️</p>
      </div>
    </div>
  );
}
