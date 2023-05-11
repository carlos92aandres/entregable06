import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4f4f4f] text-white text-center h-[200px] grid items-center">
      <div>
        <h2 className="font-bold text-2xl mt-4">© Andres 2023</h2>
      </div>
      <div className="text-4xl flex justify-center gap-7 ">
        <i className="bx bxl-linkedin bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-white hover:text-black"></i>
        <i className="bx bxl-instagram bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-white hover:text-black "></i>
      </div>
    </footer>
  );
};

export default Footer;
