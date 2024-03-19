import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, routelink }) => {
  const navigate = useNavigate();
  return (
    <button
      className="flex justify-center items-center w-[40%] h-full rounded-md bg-[#EDE5A6] text-lg font-mono hover:bg-[#95AFBA] transition-all duration-100 ease-in-out"
      onClick={() => {
        navigate(routelink);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
