import React from "react";

const Button = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-[40%] h-[30%] rounded-md bg-[#EDE5A6] text-lg font-mono hover:bg-[#95AFBA] transition-all duration-100 ease-in-out">
      <button>{children}</button>
    </div>
  );
};

export default Button;
