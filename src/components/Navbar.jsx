import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    {
      name: "Asanas",
      Link: "",
    },
    {
      name: "Homecines",
      link: "",
    },
    {
      name: "TimeTable",
      link: "",
    },
  ];
  return (
    <div className="h-[12vh] w-full bg-[#A3E7FC] grid grid-cols-12">
      <div className="logo col-span-4 flex justify-center items-center">
        <div className="image h-[80%] w-1/2  rounded-md flex justify-center items-center ">
          <span className="font-mono text-2xl hover:scale-125 transition-all duration-100">
            Home Health
          </span>
        </div>
      </div>
      <div className="navLinks col-span-8  flex justify-around items-center ">
        {navLinks.map((item, index) => {
          return (
            <NavLink to={""}
              className="bg-teal-500 rounded-full flex items-center justify-center h-[70%] w-[20%] hover:bg-[#57A686] transition-all duration-100 ease-in-out"
              key={index}
            >
              <span className="font-mono text-xl font-[500]">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
