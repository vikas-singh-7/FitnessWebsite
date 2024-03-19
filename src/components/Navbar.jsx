import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [prevScroll, setprevScroll] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  useEffect(
    function () {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        const isVisible = prevScroll > currentScroll || currentScroll < 10;

        setprevScroll(currentScroll);
        setVisible(isVisible);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [prevScroll]
  );
  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  // const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const isVisible =
  //       prevScrollPos > currentScrollPos || currentScrollPos < 10;

  //     setPrevScrollPos(currentScrollPos);
  //     setVisible(isVisible);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);
  const navLinks = [
    { name: "Home", link: "/" },
    {
      name: "Asanas",
      link: "/asanas", // Example path, replace it with the actual path
    },
    {
      name: "Homecines",
      link: "/homecines", // Example path, replace it with the actual path
    },
    {
      name: "TimeTable",
      link: "/timetable", // Example path, replace it with the actual path
    },
  ];
  return (
    <div
      className={` ${
        visible ? "" : "hidden"
      } fixed top-0 z-[9] h-[12vh] w-full  bg-violet-500 backdrop-blur-md grid grid-cols-12`}
    >
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
            <NavLink
              to={item.link}
              className={({ isActive }) => {
                return `  ${
                  isActive && "text-white"
                } flex items-center justify-center  hover:text-white transition-all duration-100 ease-in-out`;
              }}
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

// ohhh okay okay now its start to make sense , so we store the prev scroll pos so that when we scroll up or down , lets say we are bottom and now prev scroll is larger lets say 10 and we scroll up now currentscroll changes it gets 9 lets say , now 9 is less then 10 and now we say that of currentscroll<prev navbar should bhi visible , (prev>curresntpos) return true if visible is true then navbar will be displayed and if we scroll down the prev scroll was lets say 5 and we scroll down and now currntscroll become 7 now the condition prev>current became false and it return false thats why visible gets false and navbar get hided....

// so , when we use navlink and we want to use its isActive param we do like classname = {({isActive}=>{return(`classes ${isActive&&"text-green"}`)})}
